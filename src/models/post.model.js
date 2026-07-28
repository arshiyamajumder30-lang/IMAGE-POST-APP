//gives schema of the data in db
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    //tells db how the post will look whose data we will store
    image: String,
    caption: String,
})

const postModel = mongoose.model("post", postSchema)

module.exports = postModel;
