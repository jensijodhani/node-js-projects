
const UserModel = require('../models/UserModel')
const DataModel = require('../models/DataModel')

const path = require('path')
const fs = require('fs')

// authntication
const registerpage = (req, res) => {
    return res.render('res')
}

const loginpage = (req, res) => {
    if (res.locals.user) {
        return res.redirect('/view')
    }
    return res.render('login')
}

const registerusers = async (req, res) => {
    try {
        const { name, email, password } = req.body
        await UserModel.create({
            name: name,
            email: email,
            password: password,
        })
        return res.redirect('/login')
    } catch (error) {
        console.log(error);
    }
}

const loginuser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email: email });

        if (!user || user.password != password) {
            console.log("email and password is not match");
            return false;
        }
        res.cookie('auth', user)
        return res.redirect('/view')
    } catch (err) {
        console.log(err);
        return false;
    }
}

// CRUD
const viewPage = async (req, res) => {
    try {
        const user = await DataModel.find({});
        return res.render('view', {
            user
        });
    } catch (error) {
        console.log(err);
        return false;
    }
};

const addPage = (req, res) => {
    return res.render('add')
}

const insertdata = async (req, res) => {
    try {
        const { name, price, qty, description } = req.body
        const user = await DataModel.create({
            name: name,
            price: price,
            qty: qty,
            description: description,
            image: req.file.path
        })
        return res.redirect('view')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deletData = async (req, res) => {
    try {

        let id = req.params.id;
        let single = await DataModel.findById(id);
        fs.unlinkSync(single.image);
        await DataModel.findByIdAndDelete(req.params.id);
        return res.redirect('/view');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editpage = async (req, res) => {
    try {
        let id = req.params.id;

        let single = await DataModel.findById(id);
        return res.render('edit', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateData = async (req, res) => {
    try {
        const { id, name, price, qty, description } = req.body;
        if (req.file) {
            let single = await DataModel.findById(id);
            fs.unlinkSync(single.image);
            await DataModel.findByIdAndUpdate(id, {
                name: name,
                price: price,
                qty: qty,
                description: description,
                image: req.file.path
            })   
            return res.redirect('/view');
        } else {
            const { id, name, price, qty, description } = req.body;
            let single = await DataModel.findById(id);

            const up = await DataModel.findByIdAndUpdate(id, {
                name: name,
                price: price,
                qty: qty,
                description: description,
                image: single.image
            })
            return res.redirect('/view')
        }
    } catch (err) {
        console.log(err);
        return false;
    }
}

// add to cart
const AddtoCrat = async (req, res) => {
    try {
        return res.redirect('/AddtoCratview');
    } catch (err) {
        console.log(err);
        return false;
    }
};

const AddtoCratview = async (req, res) => {
    try {
        const item = await DataModel.find({});
        return res.render('addtocart', { item });
    } catch (err) {
        console.log(err);
        return false;
    }
};

const deletecart = async (req, res) => {
    try {
        const id = req.query.id;
        const product = await DataModel.findByIdAndDelete(id);

        return res.redirect('/AddtoCratview');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const buyNow = (req,res)=>{
    return res.render('buynow')
}

// LOGOUT
const logout = (req, res) => {
    req.logout((err) => {
        console.log(err);
        return false;
    })
    return res.redirect('/login');
}

module.exports = {
    registerpage, registerusers, loginpage, loginuser, viewPage, addPage, insertdata, deletData, editpage, updateData, AddtoCrat, AddtoCratview,deletecart,buyNow, logout
}