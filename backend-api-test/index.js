import express from "express";
import routes from './routes/users.js'
import cors from "cors"
const app = express()

const PORT = process.env.PORT ||5000
app.use(express.json());
app.use(cors())
app.use('/api/users', routes)

app.get('/', (req,res)=>{
    res.send(`<p>hi</p>`)
})

app.listen(PORT ,()=>{
        console.log(`server running on port http://localhost:${PORT}`)
})