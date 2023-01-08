const { urlencoded } = require("express")
const express = require("express")
const indexRouter = require("../routes/index")
const domainRouter = require("../routes/domainName")

const app = express()

app.use(express.json())
app.use(urlencoded({extended: true}))

app.use("", indexRouter)
app.use("/domain", domainRouter)

app.use((req, res)=>{
    res.status(404).json("Page not found")
})

module.exports = app