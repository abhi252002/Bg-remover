import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'
import userRouter from './routes/userRoutes.js'
// import imageRouter from './routes/imageRoute.js'

// App Config  

const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// Initilized Middleware
app.use(express.json())
app.use(cors())

// API routesn
app.get('/',(req, res)=>res.send("Api Working"));
app.use('/api/user', userRouter)
// app.use('/api/image', imageRouter)
app.listen(PORT, ()=> console.log("Server Running on port "+ PORT))
// ghjguk,j