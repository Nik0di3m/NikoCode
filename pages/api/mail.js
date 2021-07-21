import nodemailer from 'nodemailer'
import dotenv from "dotenv";

const mail = async (req, res) => {
    const { name, email, topic, messege } = req.body;
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    try {
        transporter.sendMail({
            from: 'NikoCode Kontakt',
            to: "nikodem.waleszczyk@gmail.com",
            subject: `${topic}`,
            html: `<p>Imię: ${name}</p> <p>Email: ${email}</p> <p>Topic: ${topic}</p><p>${messege}</p>`
        })
        transporter.sendMail({
            from: 'NikoCode Kontakt',
            to: `${email}`,
            subject: 'Thanks for you contact',
            html: `Thanks for you contact! I recived u'r mail and I'll try response soon as possible🔥<br/><br/> Have nice day!<br/>NikoCode`
        })
    } catch (error) {
        console.log(error)
    }



    res.status(200).json(req.body)
}

export default mail
