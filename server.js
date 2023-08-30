const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

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
    return res.render("fotos", { item: videos })
})

server.get("/specs", function(req,res) {
    return res.render("specs", { item: videos })
})

server.get("/googleglass", function(req, res) {
    return res.render("googleglass", {item: videos})
})

server.get("/multimidia", function(req,res) {
    return res.render("multimidia", { item: videos })
})

    return res.render("about", { about })
})

server.get("/faleconosco", function(req, res){
    return res.render("faleconosco", { items: videos })
})

server.get("/video", function(req, res) {
    const id = req.query.id 

    const video = videos.find(function(video) {
        return video.id == id
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})


server.listen(5000, function() {
    console.log("server is running")
})
