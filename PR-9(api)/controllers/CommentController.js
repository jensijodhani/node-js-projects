const commentModel = require('../models/CommentModel');
const blogModel = require('../models/PostModel');

const addComment = async (req, res) => {
    try {
        const postid = req.body.postid;
        const post = await blogModel.findOne({ _id: postid })
        if (post) {
            const commnet = req.body.commnet
            const com = await commentModel.create({
                userid: req.user._id,
                postid: postid,
                comment: commnet
            })
            return res.status(200).send({
                success: true,
                messsge: "commnet add",
                com
            })
        } else {
            return res.status(501).send({
                success: false,
                messsge: "post id is not valid",
            })
        }
    } catch (error) {
        return res.status(501).send({
            success: false,
            err: error
        })
    }
}

module.exports = {
    addComment
}