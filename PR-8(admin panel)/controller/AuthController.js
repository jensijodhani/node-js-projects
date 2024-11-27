const UserModel = require('../models/UserModel');

const nodemailer = require('nodemailer');

const loginPage = (req, res) => {
    if (res.locals.users) {
        return res.redirect('dashboard')
    }
    return res.render('login')
}
const loginUser = (req, res) => {
    return res.redirect('dashboard')
}
const dashboardPage = (req, res) => {
    return res.render('dashboard')
}
const registerPage = (req, res) => {
    return res.render('register');
}
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log("user successfully create");
        return res.redirect('dashboard');
    } catch (err) {
        console.log(err);
        return false;

    }
}
const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.redirect('/');
    });
}

// forgot password
const forgotPassword = async (req, res) => {
    try {
        let email = req.body.email;
        const user = await UserModel.findOne({ email: email });

        if (!user) {
            console.log("User not found");
            return res.redirect('/')
        }
        const otp = Math.floor(Math.random() * 100000);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'jensijodhani2043@gmail.com',
                pass: 'vycc eihx dyhm osqr'
            }
        });

        var mailOptions = {
            from: 'jensijodhani2043@gmail.com',
            to: email,
            subject: 'Sending Email using Node.js',
            html: `
                <h1>Forgot password</h1>
                <h2>Company name :- rudra infotech</h2>
                <h3 style="color:green">Hello ${user.name} Your Otp :- ${otp}</h3>
                <h3>Thank you</h3>

             `
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                let obj = {
                    otp: otp,
                    email: email
                }
                res.cookie('otp', obj);
                return res.redirect('/otp');
            }
        });

    } catch (err) {
        console.log(err);
        return false;
    }
}

const otpPage = (req,res) => {
    return res.render('otp');
}

module.exports = {
    loginPage, loginUser, dashboardPage, registerUser, registerPage, logout, forgotPassword,otpPage
}