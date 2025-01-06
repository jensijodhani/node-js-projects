const blogModel = require('../models/PostModel');

const addblog = async (req, res) => {
    try {

        const { title, description } = req.body
        if (!title || !description || !req.file) {
            return res.status(400).send({
                success: false,
                message: "all filed is required",
            })
        }

        const users = await blogModel.create({
            user_id: req.user._id,
            title: title,
            description: description,
            image: req.file.path

        })
        return res.status(200).send({
            success: true,
            messsge: "blog added sucessfully",
            users
        })


    } catch (error) {
        return res.status(501).send({
            success: false,
            err: error
        })
    }
}
const viewblog = async (req, res) => {
    try {
        const users = await blogModel.find({ user_id:  req.user._id }).populate('user_id')
        return res.status(200).send({
            success: true,
            messsge: "blog fetch",
            users
        })

    } catch (error) {
        return res.status(501).send({
            success: false,
            err: error
        })
    }
}
const deleteblog=async(req, res)=>{
    try {
        const id=req.query.id;
        const users=await blogModel.findByIdAndDelete(id)
        return res.status(200).send({
            success : true,
            messsge:"user delete",
        })
    
        } catch (error) {
            return res.status(501).send({
                success : false,
                err : error
            })
        }
}
const updateblog=async(req, res)=>{
    try {
        const {id,title,description}=req.body
  
     
        if (req.file) {
            let single = await blogModel.findById(id)
            console.log(single);
            
            fs.unlinkSync(single.image)

            users= await blogModel.findByIdAndUpdate(id, {
                title:title,
                description:description,
                image:req.file.path
            })
        console.log( users);
        
    return res.status(200).send({
            sucess:true,
            message:"user update",
            users
        })

        }
        else {
            let single = await blogModel.findById(id)

            users= await blogModel.findByIdAndUpdate(id, {
                title:title,
                description:description,
                image: single.image
            })
            console.log(users);
            
            return res.status(200).send({
                sucess:true,
                message:"user update",
                users
            })

        }
    
    } catch (error) {
        return res.status(501).send({
            success : false,
            err : error.message
        })
    }
    
}
module.exports={
    addblog ,viewblog , deleteblog , updateblog
}