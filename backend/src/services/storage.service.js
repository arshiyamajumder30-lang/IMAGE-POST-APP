const ImageKit = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey: "private_B8v91T6bTF+mljfg3m0zVQZTUws="
})

//buffer of the file u want to upload 
//each file passed as buffer param
async function uploadFile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName : "image.jpg"
    })
    return result;
}

module.exports = uploadFile;