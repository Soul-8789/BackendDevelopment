import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app=express();

app.get('/ping',(req,res)=>{
    res.status(200).json({message:'pong'})
})

const PORT =process.env.PORT ||8000;

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})