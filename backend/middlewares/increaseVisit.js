import Post from "../models/post.model.js"

const increaseVisit = async(req,res,next)=>{
    const slug= req.params.slug;

    await Post.findOneAndUpdate({slug}, {$inc:{visit:1}});
    //after increasing the visit number it s gonna run the next fun : getPost
    next();   
};
export default increaseVisit;