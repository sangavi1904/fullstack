const express = require('express')
const app = express();

// //for test
// require('./models/db')

//dotenv
const dotenv = require('dotenv');
dotenv.config();  

const cors = require('cors')


app.get('/', function (req, res) {
  res.send('Hello World')
})

//json which means body parser

app.use(express.json());


//routes setup
const routes = require('./routes/routes')
app.use('/check',routes)

//cors which means connect the frontend and backend 
app.use(cors())
//middleware
app.use((req,res,next)=>{
    console.log(req.method + req.path)
    next();
})

//Routes

app.listen(process.env.port,()=>{
    console.log("Server is running on "+ process.env.port)
})