const express = require("express")
const app = express()
const router = require("./routes/postRoutes")


app.use((req, res,next)=>{ // the log middelware
    console.log(`methode : ${req.method}`)
    console.log(`path : ${req.path}`)
    next()
})
app.use(express.json())  // for update and add data
app.use("/api", router) // i made the 'user' as the router

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, ()=>{
    console.log("running on 3000")
})