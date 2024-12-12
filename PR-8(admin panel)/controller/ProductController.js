const CategoryModel = require('../models/CategoryModel');
const subcategoryModel = require('../models/SubcategoryModel');
const ExsubcategoryModel = require('../models/ExsubcategoryModel');
const ProductModel = require('../models/ProductModel');

const productviewPage = async (req, res) => {
    try {
        let product = await ProductModel.find({}).populate("categoryId").populate("subcategoryId").populate("exsubcategoryId");
        return res.render('view_product', {
            product
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addproductPage = async (req, res) => {
    try {
        let category = await CategoryModel.find({});
        let subcategory = await subcategoryModel.find({});
        let exsubcategory = await ExsubcategoryModel.find({});
        return res.render('add_product', {
            category,
            subcategory,
            exsubcategory
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertProduct = async (req, res) => {
    try {
        const { category, subcategory, exsubcategory } = req.body;
        await ExsubcategoryModel.create({
            categoryId: category,
            subcategoryId: subcategory,
            exsubcategoryId: exsubcategory
        })
        return res.redirect('/product');
        console.log(req.body);


    } catch (err) {
        console.log(err);
        return false;
    }
}

// ajax ex
const ajaxSubcategory = async (req, res) => {
    try {
        let id = req.query.id;
        let exsubcat = await ExsubcategoryModel.find({ subcategoryId: id });
        return res.send({
            success: true,
            message: "data fetch",
            exsubcat
        })

    } catch (err) {
        console.log(err);
        return false;
    }
}

module.exports = {
    productviewPage, addproductPage, insertProduct, ajaxSubcategory
}