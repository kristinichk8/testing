const knex = require('../DB/db.js');
const jwt = require('jsonwebtoken')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, 'dfdf', {expiresIn: '60m'})
        const refreshToken = jwt.sign(payload, 'fgfg', {expiresIn: '30d'})

        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokens = await knex
            .select('*')
            .from('Users')
            .joinRaw('left join user_tokens as token ON token.user_id = "Users"."UsersID"', [])
            .where('UsersID', userId)

        await tokens.some(async function(currentObject) {
            if (currentObject.token !== 0 || currentObject.token !== undefined || currentObject.token !== '') {
                await knex
                    .select('*')
                    .from('user_tokens')
                    .where('user_id', userId)
                    .update('token', refreshToken)
                return null;
            }
        });

        await knex('user_tokens').insert(
            {
                user_id: userId,
                token: refreshToken
            }
        )
    }

    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, 'dfdf')
            return userData
        } catch (e) {
            return null;
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, 'fgfg')
            return userData
        } catch (e) {
            return null;
        }
    }

    async removeToken(refreshToken) {
        const tokenData = await knex
            .select('*')
            .from('user_tokens')
            .where('token', refreshToken)
            .del()

        return tokenData
    }

    async findToken(refreshToken) {
        const tokenData = await knex
            .select('token')
            .from('user_tokens')
            .where('token', refreshToken)

        return tokenData
    }
}

module.exports = new TokenService()
