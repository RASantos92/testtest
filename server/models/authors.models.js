const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        minlength: [3, "Name must be longer than 3 characters"]
    }
}, {timestamps: true})


module.exports = mongoose.model("Author", AuthorSchema); 
