const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userID:{
           type:String,
           trim:true,
           required:true, 
        },
        project_title: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        langSelect: {
            type: String,
            trim: true,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('LangSelects', userSchema);
