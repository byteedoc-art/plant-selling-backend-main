
import express, { json } from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js'
dotenv.config();

const app = express();
app.use(json())
// for test server is running or not 
app.get('/',(req,res)=>{
    res.send("Server is Running correctly ...");
})

app.use('/auth',authRoutes)



app.listen(process.env.PORT,()=>{
     console.log(`Server run ho raha es ${process.env.PORT} PORT per `)
})