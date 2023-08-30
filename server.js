const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/index", function(req,res) {
    const home = {
        img_glass: "_imagens/glass-quadro-homem-mulher.jpg",
        video1: "_media/how-it-feels.mp4"
    }

    return res.render("index", { home })
})

server.get("/fotos", function(req,res) {
    return res.render("fotos")
})

server.get("/specs", function(req,res) {
    return res.render("specs")
})

server.get("/googleglass", function(req, res) {
    return res.render("googleglass")
})

server.get("/multimidia", function(req,res) {
    return res.render("multimidia")
})

server.get("/", function(req, res){
    const about = {
        img_glass: "_imagens/glass-quadro-homem-mulher.jpg",
        video1: "_media/how-it-feels.mp4"
    }

    return res.render("index", { about })
})

server.get("/faleconosco", function(req, res){
    return res.render("faleconosco")
})


server.listen(5000, function() {
    console.log("server is running")
})
