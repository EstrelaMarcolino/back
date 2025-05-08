require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
require('./db')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "/*");
    res.header("Access-Control-Allow-Methods", 'GET,POST', 'PUT', 'DELETE');
    app.use(cors())
    next();
})
app.use(cors())

const PicRoute = require("./routes/Pic")
const user = require("./routes/Usuario")
const coop = require("./routes/Cooperativa")
const product = require("./routes/Produto")
const compra = require("./routes/Compra")
const stripe = require("./routes/stripe")
const card = require("./routes/Cartao")
const Agencia = require("./routes/Agencia")
const Modelo = require("./routes/Modelo")
const Chat = require("./routes/Chat")

app.use("/pic", PicRoute)
app.use("/auth", user)
app.use("/coop", coop)
app.use("/product", product)
app.use("/compra", compra)
app.use("/pay", stripe)
app.use("/card", card)
app.use("/agencia", Agencia)
app.use("/modelo", Modelo)
app.use("/chat", Chat)


const PORT = process.env.PORT
app.listen(PORT, console.log("Servidor Inicializado Na " + "PORT:" + PORT))