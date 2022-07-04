const express=require('express')
const cors=require('cors')
const app= express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))


const restaurantRouter=require('./routes/restaurantRoute.js')
app.use('/api/restaurant',restaurantRouter)

app.get('/',(req,res)=>{
    res.send("hello world")
})
const PORT = 3000
app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)
})
