
import express, { json } from 'express';
import dotenv from 'dotenv';
import authRoutes from './src/routes/authRoutes.js'
import db from './config.js';
import profileRouter from './src/routes/profileRoutes.js';
dotenv.config();
import cors from 'cors'
import RolesRouter from './src/routes/rolesroutes.js';
import authMiddleware from './src/middleware/authMiddleware.js';
import categoryRouter from './src/routes/categoryRoutes.js';

const app = express();

app.use(json())
app.use(cors());

// Task 
// make api for categories of plants 

app.get('/',(req,res)=>{
    res.send("Server is Running correctly ...");
})

db();
app.use('/auth',authRoutes)
app.use('/profile', profileRouter);
app.use('/category',categoryRouter);
// app.use('/roles',RolesRouter);

app.listen(process.env.PORT,()=>{
     console.log(`Server run ho raha es ${process.env.PORT} PORT per `)
})