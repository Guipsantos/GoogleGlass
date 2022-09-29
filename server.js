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

server.get("/", function(req, res){
    const about = {
        avatar_url: "https://scontent.fcgh8-1.fna.fbcdn.net/v/t1.0-1/c0.0.200.200a/p200x200/1620669_607415132670919_663330126_n.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeETM64LxoacySu6s6g5zkggjVM_yvUTT5aNUz_K9RNPlk02QMJ5_FRsDJtl-lYVCko&_nc_ohc=OIyY1qg36_QAX_AK03B&_nc_ht=scontent.fcgh8-1.fna&_nc_tp=27&oh=b30cc0f36d145cc3ca73f3d87462cd70&oe=5FAC4824",
        name: "Gabriela Pires",
        role: "Professora particular de inglês.",
        description: 'Professora e Fundadora em <a href="https://idiomasupdate.com.br" target="_blank">Update</a>',
        links: [
            {name: "Facebook", url: "https://www.facebook.com/updatemeetingbr"},
            {name: "Instagram", url: "https://www.instagram.com/updatemeetingbr/"}
        ]        
    }

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