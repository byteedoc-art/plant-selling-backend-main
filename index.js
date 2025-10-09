
import express, { json } from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js'
import db from './config.js';
import profileRouter from './src/routes/profileRoutes.js';
dotenv.config();

const app = express();
app.use(json())

app.get('/',(req,res)=>{
    res.send("Server is Running correctly ...");
})
// database connection 

db();

// All routes 
app.use('/auth',authRoutes)
app.use('/profile',profileRouter);

app.listen(process.env.PORT,()=>{
     console.log(`Server run ho raha es ${process.env.PORT} PORT per `)
})