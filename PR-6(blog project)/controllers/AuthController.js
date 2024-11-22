const user = require('../models/UserModel')
const UserModel = require('../models/UserModel');

const registerPage = (req, res) => {
    return res.render('register')
}

const loginPage = (req, res) => {
    if (req.cookies['auth']) {
        return res.redirect('/dashboard')
    }
    return res.render('login')
}

const dashboardPage = (req, res) => {
    if (!req.cookies['auth']) {
        return res.redirect('/');
    }
    return res.render('dashboard')
}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await UserModel.create({
            name: name,
            email: email,
            password: password
        })
        console.log("successfully register");
        return res.redirect('/login')

    } catch (err) {
        console.log(err);
        return false;
    }
}

const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email });
        if (!user || user.password != password) {
            console.log('email and password not valid');
            return res.redirect('/');
        }
        res.cookie('auth', user);
        return res.redirect('/dashboard')
    } catch (err) {
        console.log(err);
        return false;
    }
}

const logoutUser = (req, res) => {
    res.clearCookie('auth')
    return res.redirect('/');
}

// const addProduct = (req, res) => {
//     return res.render('add')
// }

// const viewPage = async (req, res) => {
//     try {
//         let users = await UserModel.find({});
//         return res.render('view', {
//             users
//         });
//     } catch (err) {
//         console.log(err);
//         return false;
//     }
// }

// const addRecord = async (req, res) => {
//     try {
//         const { name, price, seats, motype } = req.body;
//         await UserModel.create({
//             name: name,
//             price: price,
//             seats: seats,
//             motype: motype,
//             image: req.file.path
//         })
//         return res.redirect('/view')
//     } catch (err) {
//         console.log(err);
//         return false;
//     }
// }

// const deleteRecord = async (req, res) => {
//     try {
//         let id = req.query.id;
//         let single = await UserModel.findById(id);
//         fs.unlinkSync(single.image);
//         await UserModel.findByIdAndDelete(id);
//         console.log(`user delete`);
//         return res.redirect('back');
//     } catch (err) {
//         console.log(err);
//         return false;
//     }
// }

// const editRecord = async (req, res) => {
//     try {
//         let id = req.query.id;
//         let single = await UserModel.findById(id);
//         return res.render('edit', {
//             single
//         })
//     } catch (err) {
//         console.log(err);
//         return false;
//     }
// }

// const updateRecord = async (req, res) => {
//     try {
//         const { editid, name, price, seats, motype } = req.body;
//         if (req.file) {
//             let single = await UserModel.findById(editid);
//             fs.unlinkSync(single.image);
//             await UserModel.findByIdAndUpdate(editid, {
//                 name: name,
//                 price: price,
//                 seats: seats,
//                 motype: motype,
//                 image: req.file.path
//             })
//             console.log("record update");
//             return res.redirect('/view');
//         } else {
//             let single = await UserModel.findById(editid);
//             await UserModel.findByIdAndUpdate(editid, {
//                 name: name,
//                 price: price,
//                 seats: seats,
//                 motype: motype,
//                 image: single.image
//             })
//             console.log("record update");
//             return res.redirect('/view');
//         }
//     } catch (err) {
//         console.log(err);
//         return false;
//     }
// }

const carProduct = (req, res) => {
    return res.render('carproduct')
}

const bikeProduct = (req, res) => {
    return res.render('bikeproduct')
}

const cycleProduct = (req, res) => {
    return res.render('cycleproduct')
}

const makeupProduct = (req, res) => {
    return res.render('makeuproduct')
}

module.exports = {
    registerPage, loginPage, dashboardPage, registerUser, loginUser, logoutUser, carProduct, bikeProduct, cycleProduct, makeupProduct
    // addProduct, addRecord, viewPage, deleteRecord, editRecord, updateRecord
}