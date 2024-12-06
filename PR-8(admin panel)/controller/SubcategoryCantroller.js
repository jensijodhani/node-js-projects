const CategoryModel = require('../models/CategoryModel');
const subcategoryModel = require('../models/SubcategoryModel');

const subCategoryPage = async (req, res) => {
    try {
        let scategory = await subcategoryModel.find({}).populate("categoryId")
        return res.render('view_subcategory', {
            scategory
            
        });

    } catch (err) {1
        console.log(err);
        return false;
    }
}

const addsubCategoryPage = async (req, res) => {
    try {
        let category = await CategoryModel.find({ status: "active" });
        return res.render('add_subcategory', {
            category
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const insertSubcategory = async (req, res) => {
    try {
        const { category, subcategory } = req.body;
        await subcategoryModel.create({
            categoryId: category,
            subcategory: subcategory
        })
        console.log("subcategory is create");
        return res.redirect('/subcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editSubcategory = async(req,res)=>{
    try{
        let id = req.query.id
        let category = await CategoryModel.find({status:"active"});
        let single = await subcategoryModel.findById(id).populate("categoryId")
        return res.render()
    }catch(err){
        console.log(err);
        return false;
    }
}

module.exports = {
    subCategoryPage, addsubCategoryPage, insertSubcategory,editSubcategory
}