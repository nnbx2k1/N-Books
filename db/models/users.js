import {mongoose , Types } from 'mongoose'

var schemaUser=mongoose.Schema({
    name : { type : String , required : true },
    email : { type : String , required : true },
    password : { type : String , required : true },
    cart : [Types.ObjectId]
})

export const User = mongoose.model('user',schemaUser)