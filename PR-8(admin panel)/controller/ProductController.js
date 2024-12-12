const CategoryModel = require('../models/CategoryModel');
const subcategoryModel = require('../models/SubcategoryModel');
const ExsubcategoryModel = require('../models/ExsubcategoryModel');
const ProductModel = require('../models/ProductModel');
const subcategory = require('../models/SubcategoryModel');

const productviewPage =(req,res)=>{
    return res.render('view_product')
}

const addproductPage =async(req,res)=>{
    try{
        let category = await CategoryModel.find({});
        return res.render('add_product',{
            category
        })
    }catch(err){
        console.log(err);
        return false;
    }
}

const ajaxSubcategory =async(req,res)=>{
    try{
        let id = req.query.id;
        let exsubcat = await ExsubcategoryModel.find({subcategoryId:id });

        return res.send({    
            success: true,
            message:"data fetch",
            exsubcat
        })

    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports={
    productviewPage,addproductPage,ajaxSubcategory
}