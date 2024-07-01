const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.USER, // random user
        pass: process.env.PASS // random pass
    },
});

const sendMail = async (req, res) => {
    try {

        const info = await transporter.sendMail({
            from: {
                name: "Rohit Gupta",
                address: process.env.USER,
            }, // sender address
            to: "9431iamrohitkumar@gmail.com", // list of receivers
            subject: "Hello Learn Nodemailer", // Subject line
            text: "Hello world? learn NodeMailer with gmail", // plain text body
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
