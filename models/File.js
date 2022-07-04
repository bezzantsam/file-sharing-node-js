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
        type: number,   
        default: 0,
        required: true
    }
})

module.exports = mongoose.model("File", File)