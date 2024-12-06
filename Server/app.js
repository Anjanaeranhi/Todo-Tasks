const express = require("express")
const { TodoRouter } = require("./routes/todo.route")
const Config = require("./config/todo.config")

const app = express()
Config.connectdb()
app.use(express.json())

app.use("/", TodoRouter)

app.listen(8080, (err)=>{
    if(err){
        process.exit(1);
    }
    console.log("Running in port 8090");
})