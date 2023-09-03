import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import morgan from "morgan"
import AuthRouter from './routes/AuthRouter.js';
import UserRouter from './routes/UserRouter.js';
import MovieRouter from './routes/MovieRouter.js'
import ListRouter from './routes/ListRouter.js'

dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected To DB Successfully");
}).catch((err)=>{
    console.log(err.message);
})

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/auth',AuthRouter)
app.use('/api/users',UserRouter)
app.use('/api/movies',MovieRouter)
app.use('/api/lists',ListRouter)


app.listen(8080,() => {
    console.log('listening on port 8080')
})