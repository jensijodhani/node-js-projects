const CategoryModel=require('../models/CategoryModel');

const addCategoryPage = (req,res)=>{
    return res.render('add_category')
}

const viewCategoryPage = async(req,res)=>{
    try{
        let categories = await CategoryModel.find({})
        return res.render('view_category',{
            categories
        })
        
    }catch(err){
        console.log(err);
        return false;
    }

}

const insertCategory = async (req,res)=>{
    try{
        await CategoryModel.create({
            category_name:req.body.category
        })
        console.log("category create");
        return res.redirect('/category/viewcategory')
    }catch(err){
        console.log(err);
        return false;
    }
}

const deleteCategory = async (req, res) => {
    try {
        let id = req.query.id;
        await CategoryModel.findByIdAndDelete(id);
        console.log(`user delete`);
        return res.redirect('back');
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editCategory = async (req, res) => {
    try {
        let id = req.query.id;
        let single = await CategoryModel.findById(id);
        return res.render('edit_category', {
            single
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateCategory = async (req, res) => {
    try {
        const { editid,name } = req.body;
            await CategoryModel.findByIdAndUpdate(editid, {
                category_name: name,
            })
            console.log("category update");
            return res.redirect('/category/viewcategory');
        }
    catch(err) {
        console.log(err);
        return false;
    }
}

module.exports={
    addCategoryPage,viewCategoryPage,insertCategory,deleteCategory,editCategory,updateCategory
}