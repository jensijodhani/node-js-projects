const CategoryModel = require('../models/CategoryModel');
const subcategoryModel = require('../models/SubcategoryModel');
const ExsubcategoryModel = require('../models/ExsubcategoryModel');

const viewExsubcategorypage = async (req, res) => {
    try {
        let exscategory = await ExsubcategoryModel.find({}).populate("categoryId").populate("subcategoryId");
        return res.render('view_exsubcategory', {
            exscategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addExsubcategorypage = async (req, res) => {
    try {
        let category = await CategoryModel.find({});
        let subcategory = await subcategoryModel.find({});
        return res.render('add_exsubcategory', {
            category,
            subcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertExsubcategory = async (req, res) => {
    try {
        const { category, subcategory, exsubcategory } = req.body;
        await ExsubcategoryModel.create({
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategory: exsubcategory
        })
        return res.redirect('/exsubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editExsubcategory = async (req, res) => {
    try {
        let id = req.query.id
        let category = await CategoryModel.find({});
        let single = await subcategoryModel.findById(id).populate("categoryId").populate("subcategoryId")
        return res.render('edit_exsubcategory', {
            category,
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deleteExsubcategory = async (req, res) => {
    try {
        let id = req.query.id;
        await ExsubcategoryModel.findByIdAndDelete(id);
        req.flash('danger', 'Exsubcategory delete');
        return res.redirect('back');
    } catch (err) {
        console.log(err);
        return false;
    }  
}

module.exports = {
    viewExsubcategorypage, addExsubcategorypage, insertExsubcategory,deleteExsubcategory,editExsubcategory
}