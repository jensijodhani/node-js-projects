const UserModel = require('../models/userModel')

const fs = require('fs')

const addPage = (req, res) => {
    return res.render('add')
}

const dashboardPage = (req, res) => {
    return res.render('dashboard')
}

const bookTicket = (req, res) => {
    return res.render('bookticket')
}

const viewPage = async (req, res) => {
    try {
        let users = await UserModel.find({});
        return res.render('view', {
            users
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addRecord = async (req, res) => {
    try {
        const { name, price, seats, motype } = req.body;
        await UserModel.create({
            name: name,
            price: price,
            seats: seats,
            motype: motype,
            image: req.file.path
        })
        return res.redirect('/view')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteRecord = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await UserModel.findById(id);
        fs.unlinkSync(single.image);
        await UserModel.findByIdAndDelete(id);
        console.log(`user delete`);
        return res.redirect('back');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editRecord = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await UserModel.findById(id);
        return res.render('edit', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateRecord = async (req, res) => {
    try {
        const { editid, name, price, seats, motype } = req.body;
        if (req.file) {
            let single = await UserModel.findById(editid);
            fs.unlinkSync(single.image);
            await UserModel.findByIdAndUpdate(editid, {
                name: name,
                price: price,
                seats: seats,
                motype: motype,
                image: req.file.path
            })
            console.log("record update");
            return res.redirect('/view');
        } else {
            let single = await UserModel.findById(editid);
            await UserModel.findByIdAndUpdate(editid, {
                name: name,
                price: price,
                seats: seats,
                motype: motype,
                image: single.image
            })
            console.log("record update");
            return res.redirect('/view');
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    addPage, dashboardPage, viewPage, addRecord, deleteRecord, editRecord, updateRecord, bookTicket
}