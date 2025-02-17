import { getThreeBooks ,
         getAllBooks
 } from '../controllers/products.js'
import {addMessage} from '../controllers/messages.js'


export function booksRoutes(app){

 app.get('/', async (req,res)=>{
     const books = await getThreeBooks()
     res.render('index',{books:books})
 })

 app.get('/products', async (req,res)=>{
     const books = await  getAllBooks()
     res.render('products',{books: books })
 })

 app.get('/login', async (req,res)=>{
    res.render('login')
})

app.get('/register', async (req,res)=>{
    res.render('register')
})

app.get('/contact', async (req,res)=>{
    res.render('contact')
})

app.get('/about', async (req,res)=>{
    res.render('about')
})

app.get('/dash', async (req,res)=>{
    res.render('dash')
})

app.post('/contact', async (req, res) => {
    try {
        await addMessage(req.body);
    } catch (error) {
        console.error("Error in posting the message:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


}

