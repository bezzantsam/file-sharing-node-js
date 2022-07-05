const mongoose = require('mongoose')
const File = new mongoose.Schema({ 
    path: {
        type: String,
        required: true
    },
    originalname: { 
    
        type: String,
        required: true
    },
    password: String,
    downloadCount: {
        type: Number,   
        required: true,
        default: 0
    }
})

module.exports = mongoose.model("File", File)