const router = require("express").Router();
const Post = require("../models/Post");
//!CREATE A POST
router.get("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);

    } catch (err) {
        res.status(200).json(err)
    }

});
//!UPDATE A POST
//! DELETE A POST
//!LIKE A POST
//!GET A POST
//!GET ALL POST
//!GET  TIMELINE POSTS

module.exports = router;