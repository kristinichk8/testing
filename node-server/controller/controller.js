const knex = require('../DB/db.js');
let express = require('express');
let router = express.Router();

const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('../service/mail-service')
const tokenService = require('../service/token-service')

const userDTO = require('../dtos/user-dto')

const ApiError = require('../exeptions/api-error')

const {body, validationResult} = require('express-validator')

const authMiddleware = require('../middlewares/auth-middleware')

//all-user-routes

router.get("/products", async (req, res, next) => {
    try {
        const products = await knex.withSchema("public")
            .select('*')
            .from('Product')

        res.send(products)
    } catch (e) {
        next(e)
    } 
});

router.get("/articles", async (req, res, next) => {
    try {
        const articles = await knex.withSchema("public")
            .select('*')
            .from('articles')

        res.send(articles)
    } catch (e) {
        next(e)
    }
});

router.get("/articles/:id", async (req, res, next) => {
    try {
        const articlesID = req.params.id
        const article = await knex.withSchema("public")
            .select('*')
            .from('articles')
            .where('id', articlesID)
        console.log(article)

        res.send(article)
    } catch (e) {
        next(e)
    }
});

router.get("/products/:id", async (req, res, next) => {
    try {
        const id = req.params.id
        const product = await knex.withSchema("public")
            .select('*')
            .from('Product')
            .where('ProductID', id)
        console.log(product)

        res.send(product)
    } catch (e) {
        next(e)
    }
});

router.post("/create-order", async (req, res, next) => {
    try {
        const id = uuid.v4()
        await knex('orders').insert({
            id: id,
            user_id: req.body.user_id,
            product_id: req.body.product_id,
            status_id: 1,
            address: req.body.address,
            fio: req.body.fio
        })

        setTimeout(async () => {
            await knex('orders').update('status_id', 2).where('id', id)
        }, 15000)
        setTimeout(async () => {
            await knex('orders').update('status_id', 3).where('id', id)
        }, 30000)

        res.send({message: 'Заказ успешно оформлен'})
    } catch (e) {
        next(e)
    }
});

router.post("/create-product", async (req, res, next) => {
    try {
        await knex('Product').insert({
            Name_product: req.body.Name_product,
            Country_of_origin: req.body.Country_of_origin,
            Impact: req.body.Impact,
            Taste: req.body.Taste,
            Price: req.body.Price,
            Thumbnail: req.body.Thumbnail
        })

        res.send({message: 'Заказ успешно оформлен'})
    } catch (e) {
        next(e)
    }
});

router.post("/check-email", async (req, res, next) => {
    try {
        const users = await knex
            .select('E_mail', 'User_name')
            .from('Users')

        const hasDuplicates = await users.some(function(currentObject) {
            const email = currentObject.E_mail.toLowerCase() === req.body.E_mail;
            const username = currentObject.User_name.toLowerCase() === req.body.User_name;
            return email || username;

        });

        if (!hasDuplicates) {
            throw ApiError.BadRequest(`Пользователь не найден`)
        }

        res.send({message: 'Ура'})
    } catch (e) {
        next(e)
    }
});

router.post("/set-password", async (req, res, next) => {
    try {
        const hashPassword = await bcrypt.hash(req.body.Password, 3)
        await knex('Users').update('Password', hashPassword).where('E_mail', req.body.E_mail)

        res.send({message: 'Ура'})
    } catch (e) {
        next(e)
    }
});

router.get("/orders/:id", async (req, res, next) => {
    try {
        const userID = req.params.id
        const orders = await knex.withSchema("public")
            .select('*')
            .from('orders')
            .leftJoin('Product', 'orders.product_id', 'Product.ProductID')
            .leftJoin('order_statuses', 'orders.status_id', 'order_statuses.id')
            .where('user_id', userID)

        res.send(orders)
    } catch (e) {
        next(e)
    }
});

router.get("/users", async (req, res, next) => {
    try {
        const users = await knex.withSchema("public")
            .select('*')
            .from('Users')

        res.send(users)
    } catch (e) {
        next(e)
    }
});

router.post('/users/:id', authMiddleware, async (req, res, next) => {
    try {
        const id = req.params.id;
        await knex('Users').update('Admin', req.body.state).where('UsersID', id)

        res.send('Успех')
    } catch (e) {
        next(e)
    }
})

//authorization-routes

router.post(
    '/registration',
    async (req, res, next) => {

        const users = await knex
        .select('E_mail', 'User_name')
        .from('Users')

    try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }

            const hasDuplicates = await users.some(function(currentObject) {
                const email = currentObject.E_mail.toLowerCase() === req.body.E_mail;
                const username = currentObject.User_name.toLowerCase() === req.body.User_name;
                return email || username;

            });

            if (hasDuplicates) {
                throw ApiError.BadRequest(`Пользователь уже зарегестрирован`)
            }

            const hashPassword = await bcrypt.hash(req.body.Password, 3)
            const activationLink = uuid.v4();

            await knex('Users').insert(
                {
                    User_name: req.body.User_name,
                    E_mail: req.body.E_mail,
                    Password: hashPassword,
                    Activation_Link: activationLink
                }
            )

            await mailService.sendActivationMail(req.body.E_mail, `http://localhost:8083/api/activate/${activationLink}`)

            const currentUser = await knex
                .select('E_mail', 'UsersID', 'Activated')
                .from('Users')
                .where('User_name', req.body.User_name)

            const userdto = new userDTO(currentUser[0])
            const tokens = tokenService.generateTokens({...userdto})
            await tokenService.saveToken(userdto.UsersID, tokens.refreshToken)

            res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            res.send({...tokens, user: userdto})

    } catch (e) {
        next(e)
    }
})
router.post('/login', async (req, res, next) => {
    try {
        const user = await knex
            .select('*')
            .from('Users')
            .where('E_mail', req.body.E_mail)

        if (!user[0]) {
            throw ApiError.BadRequest('Пользователь с такой эл. почтой не найден')
        }

        const isPassEquals = await bcrypt.compare(req.body.Password, user[0].Password)
        if (!isPassEquals) {
            throw ApiError.BadRequest('Неверный пароль')
        }

        const userdto = new userDTO(user[0])
        const tokens = tokenService.generateTokens({...userdto})
        await tokenService.saveToken(userdto.UsersID, tokens.refreshToken)

        res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        res.send({...tokens, user: userdto})
    } catch (e) {
        next(e)
    }
})
router.post('/logout', async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;
        await tokenService.removeToken(refreshToken)
        res.clearCookie('refreshToken');
        return res.send('Логаут успешен')
    } catch (e) {
        next(e)
    }
})
router.get('/activate/:link', async (req, res, next) => {
    try {
        const user = await knex
            .select('Activation_Link')
            .from('Users')
            .where('Activation_Link', req.params.link)

        if (!user) {
            throw ApiError.BadRequest('Неккоректная ссылка активации')
        }

        await knex
            .select('Activated')
            .from('Users')
            .where('Activation_Link', req.params.link)
            .update('Activated', true)

        return res.redirect('http://localhost:3000/activation-success')
    } catch (e) {
        next(e)
    }
})
router.get('/refresh', async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;

        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDB = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError()
        }

        const user = await knex
            .select('*')
            .from('Users')
            .where('UsersID', userData.UsersID)

        const userdto = new userDTO(user[0])
        const tokens = tokenService.generateTokens({...userdto})
        await tokenService.saveToken(userdto.UsersID, tokens.refreshToken)

        res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        res.send({...tokens, user: userdto})
    } catch (e) {
        next(e)
    }
})

//test-endpoints

router.get('/analytics', authMiddleware, async (req, res, next) => {
    try {
        const usersAnalytics = await knex
            .select('*')
            .from('user_analytics');

        res.send(usersAnalytics)
    } catch (e) {
        next(e)
    }

})

router.get('/addresses/:id', authMiddleware, async (req, res, next) => {
    try {
        const userID = req.params.id;
        const userAddresses = await knex
            .select('*')
            .from('addresses')
            .where('user_id', userID)

        res.send(userAddresses)
    } catch (e) {
        next(e)
    }

})

router.post('/addresses', authMiddleware, async (req, res, next) => {
    try {
        await knex('addresses')
            .insert({
                address: req.body.address,
                user_id: req.body.user_id
            })

        res.send('Адрес успешно добавлен')
    } catch (e) {
        next(e)
    }

})

router.delete('/addresses/:id', authMiddleware, async (req, res, next) => {
    try {
        const ID = req.params.id;

        await knex('addresses')
            .where('id', ID)
            .delete()

        res.send('Адрес удален')
    } catch (e) {
        next(e)
    }
})

router.post('/delete/user/:id', authMiddleware, async (req, res, next) => {
    try {
        const userID = req.params.id;

        await knex('user_tokens')
            .where('user_id', userID)
            .delete()

        await knex('users')
            .where('id', userID)
            .delete()

        res.send('Пользователь удален')
    } catch (e) {
        next(e)
    }

    const allUsers = await knex.select('*').from('users');
    await knex('user_analytics').insert(
        {
            length: allUsers.length
        }
    )
})


//cart-endpoints

router.post('/cart', authMiddleware, async (req, res, next) => {
    try {
        const cart = await knex
            .select('*')
            .from('cart')
            .where('user_id', req.body.id)

        if (!cart[0])
            await knex('cart').insert({user_id: req.body.id})

        res.send(cart)
    } catch (e) {
        next(e)
    }
})

module.exports = router;
