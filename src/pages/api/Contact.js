// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
    require("dotenv").config();

    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 587,
        host: "smtp.gmail.com",
        auth: {
            user: 'demo email',
            pass: process.env.password,
        },
        secure: true,
    });


    const mailData = {
        from: "Open Auto",
        to: "your email",
        subject: "Message from $(req.body.name)",
        text: req.body.message + " | Send from: " + req.body.email,
        html: `<div>$(req.body.message)</div> <br /> <div>Send from: $(req.body.email)</div>`
    }

    transporter.sendMail(mailData, function(err, info){
        if(err)
        console.log(err)
        else
        console.log(info);
    })

    console.log(req.body);
    res.send("Message sent!");
}