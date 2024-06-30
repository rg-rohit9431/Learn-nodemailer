const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: 'brian64@ethereal.email', // random user
        pass: 'wgQ2XqXtzEVjYQ6TX6' // random pass
    },
});

const sendMail = async (req, res) => {
    try {

        const info = await transporter.sendMail({
            from: '"Maddison Foo Koch 👻" <brian64@ethereal.email>', // sender address
            to: "bar@example.com, baz@example.com ", // list of receivers
            subject: "Hello Learn Nodemailer", // Subject line
            text: "Hello world? learn NodeMailer with ethreal", // plain text body
            html: "<b>Hello world? learn NodeMailer</b>", // html body
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({
            message: "Email sent successfully",
            data: info,
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = sendMail;
