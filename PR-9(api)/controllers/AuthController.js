const jwt = require('jsonwebtoken');
const userModel = require('../models/UserModel');

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).send({
                success: false,
                message: "All field is required"
            })
        }

        const user = await userModel.findOne({ email: email });
        if (!user || user.password != password) {
            return res.status(401).send({
                success: false,
                message: "email and password not valid"
            })
        }

        const token = await jwt.sign({ payload: user }, "rnw", { expiresIn: '1hr' });
        return res.status(200).send({
            success: true,
            message: "login success",
            token: token
        })
        
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err.message
        })
    }
}

module.exports = {
    loginUser
}