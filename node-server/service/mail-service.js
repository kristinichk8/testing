const nodemailer = require('nodemailer')

class MailService {

    transport = nodemailer.createTransport({
        host: 'smtp.mail.ru',
        port: '465',
        secure: true,
        auth: {
            user: 'valley.tea@mail.ru',
            pass: 'iBhrcFvRad8Tee49A8qq'
        }
    })

    async sendActivationMail(to, link) {
        try {
            await this.transport.sendMail({
                from: 'valley.tea@mail.ru',
                to: to,
                subject: 'Активация аккаунта на ' + 'VALLEY-TEA',
                text: '',
                html:
                    `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
                `
            })
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new MailService()
