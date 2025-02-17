import { Book } from '../db/models/products.js'

export async function getThreeBooks(){
   return await Book.find()
   .sort({ createdAt: -1 })
   .limit(3) 
}

export async function getAllBooks(){
   return await Book.find({})
}