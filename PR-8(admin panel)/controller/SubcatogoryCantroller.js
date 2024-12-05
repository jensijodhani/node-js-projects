const CategoryModel = require('../models/CategoryModel');
const subcategoryModel = require('../models/SubcategoryModel');

const subCategoryPage = (req,res)=>{
    try{
        return res.render('view_subcategory');
    }catch(err){
        console.log(err);
        return false;
    }
}

const addsubCategoryPage = async(req,res)=>{
    try{
        let category = await CategoryModel.find({status:"active"});
        return res.render('add_subcategory',{
            category
        });
    }catch(err){
        console.log(err);
        return false;
    }
}

const insertSubcategory=async(req,res)=>{
    try{
        const {category,subcategory}=req.body;
        await subcategoryModel.create({
            categoryId:category,
            subcategory:subcategory
        })
        console.log("subcategory is create");
        return res.redirect('/subcategory/addsubcategory');
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports={
    subCategoryPage,addsubCategoryPage,insertSubcategory
}