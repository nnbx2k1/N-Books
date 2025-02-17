import mongoose from 'mongoose'

var schemaBook=mongoose.Schema({
    title:String,
    description:String,
    author:String,
    price:Number,
    image:String 
})

export const Book = mongoose.model('book',schemaBook)

