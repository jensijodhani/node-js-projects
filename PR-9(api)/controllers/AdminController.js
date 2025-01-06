const commentModel = require('../models/CommentModel');
const blogModel = require('../models/PostModel');


const allPost = async (req, res) => {
    const allpost = await blogModel.find({}).populate('userid')
    return res.status(200).send({
        success: true,
        message: 'all post view',
        allpost

    })
}

const allComment = async (req, res) => {
    try {
        const allcommnet = await commentModel.find({}).populate('userid').populate('postid')
        return res.status(200).send({
            success: true,
            message: 'view all comment',
            allcommnet

        })

    } catch (error) {
        return res.status(501).send({
            success: false,
            err: error.message
        })
    }
}
module.exports = {
    allPost, allComment
}