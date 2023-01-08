require("dotenv").config()

const http = require("http")
const app = require("./config/app")

const port = process.env["PORT"] || 4500

const server = http.createServer(app)

server.listen(port, ()=>{
    console.log("Server running!")
})