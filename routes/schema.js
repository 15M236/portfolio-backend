const mongoose = require('mongoose')
const validator = require('validator')

const dataSchema = new mongoose.Schema({
    name:{type:'string',required:true},
    email:{
        type:'string',
        required:true, 
        lowercase:true,
        validate:(value)=>{
            return validator.isEmail(value)
        }
    },
    content:{type:'string',required:true},
})
let dataModel = mongoose.model('data-details',dataSchema);

module.exports = {mongoose,dataModel}