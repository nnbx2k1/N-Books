import mongoose from 'mongoose'

var schemaMsg = mongoose.Schema({
    name:{type : String, required : true},
    email:{type: String, required : true},
    subject: String,
    message: String
},
{ timestamps: true } )

export const Message = mongoose.model('message',schemaMsg)