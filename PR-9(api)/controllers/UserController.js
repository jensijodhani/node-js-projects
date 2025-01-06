const userModel = require('../models/UserModel');
const jwt = require('jsonwebtoken')

const addUser = async (req, res) => {
    try {
        const { name, email, password, city, phone } = req.body;
        const user = await userModel.create({
            name: name,
            email: email,
            password: password,
            city: city,
            phone: phone
        })
        return res.status(200).send({
            success: true,
            message: "user create",
            user
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

const viewUser = async (req, res) => {
    try {
        const users = await userModel.find({});
        return res.status(200).send({
            success: true,
            message: "user fetch",
            users
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        let id = req.query.id;
        await userModel.findByIdAndDelete(id);
        return res.status(200).send({
            success: true,
            message: "user delete",
        })

    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id, name, email, password, city, phone } = req.body;
        await userModel.findByIdAndUpdate(id, {
            name: name,
            email: email,
            password: password,
            city: city,
            phone: phone
        })
        return res.status(200).send({
            success: true,
            message: "user update",
        })
    } catch (err) {
        return res.status(501).send({
            success: false,
            err: err
        })
    }
}

module.exports = {
    addUser, viewUser, deleteUser, updateUser
}
