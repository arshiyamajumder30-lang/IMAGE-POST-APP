const express = require('express');
const multer = require('multer')
const uploadFile = require('./services/storage.service')
const postModel = require("./models/post.model")
const cors = require("cors")



const app= express();
//instance of server created

app.use(cors())
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()})//middleware for form-data

//api to create post
 app.post('/create-post', upload.single("image"), async (req,res)=>{
   // console.log(req.body)
   // console.log(req.file)//image comes in req.file but not in req.body
    const result = await uploadFile(req.file.buffer)
    
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "post created successfully",
        post
    }) //201 bcz new resource created 
 })


 //2nd api - to get all the posts displayed on a pg. get data from server to frontend

 app.get('/posts', async (req,res)=>{
    const posts = await postModel.find();

    return res.status(200).json({
        message:"post fetched successfully",
        posts
    })
 })

module.exports=app;