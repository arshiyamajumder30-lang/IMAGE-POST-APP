const mongoose = require("mongoose");

async function connectDB() {
    await mongoose.connect(
        "mongodb://yt:tdjBwTH4QOJCiOpZ@ac-jf0xua3-shard-00-00.ah44o1v.mongodb.net:27017,ac-jf0xua3-shard-00-01.ah44o1v.mongodb.net:27017,ac-jf0xua3-shard-00-02.ah44o1v.mongodb.net:27017/project-1?ssl=true&replicaSet=atlas-j2xyub-shard-0&authSource=admin&appName=Cluster0"
    
    )

    console.log("connected to DB")
}

module.exports = connectDB;