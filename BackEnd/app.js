const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const port = 5000

const usersRoutes = require ("./routes/users.js")
const patientsRoutes= require("./routes/patientRoute.js")
const appointementRoute= require("../BackEnd/routes/appointementRouter.js")
const db = require("./database/index.js")

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.use("/api",usersRoutes)
//************ appiontement : *************/

app.use("/api/appointement", appointementRoute)

//************ patient : *******************/

app.use("/api/patient", patientsRoutes)




app.listen(port,()=>{
   console.log(`server listenning on port ${port}`)
})



