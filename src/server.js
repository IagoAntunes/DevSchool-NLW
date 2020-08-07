

//Dados
const proffys = [
    {
        name:"Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"89987654534",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject:"Química",
        cost:"R$ 20",
        weekday:[0],
        time_from:[720],
        time_to:[1220]
    },

    {
        name:"Diego Fernandes",
        avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"89987654534",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject:"Química",
        cost:"R$ 20",
        weekday:[0],
        time_from:[720],
        time_to:[1220]
    },

    {
        name:"Iago Antunes Ferreira",
        avatar:"https://avatars2.githubusercontent.com/u/63758301?s=460&u=53066eab463ac63dbad5431a0aeb5ead09181fd4&v=4",
        whatsapp:"89987654534",
        bio:"Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões",
        subject:"Química",
        cost:"R$ 20",
        weekday:[1],
        time_from:[720],
        time_to:[1220]
    }
]
const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]




//Funcionalidades 
function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
  }

function pageLanding(req,res){
    return res.render("index.html")
}
function pageStudy(req,res){
    const filters = req.query
    /*console.log(req.query)*/ // Mostrar no Console
    return res.render("study.html", { proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query
    console.log(data)

    const isNotEmpty = Object.keys(data).length > 0

    //Se tiver dados adicionar
    if (isNotEmpty) {

    data.subject = getSubject(data.subject)

        //adicionar dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    //Se nao,mostrar a pagina
    return res.render("give-classes.html",{subjects, weekdays})
}

//Servidor
const express = require('express')
const server = express()

//Configurar Nunjucks
const nunjuck = require('nunjucks')
nunjuck.configure('src/views',{
    express: server,
    noCache: true,

})

//Configurar arquivos estaticos SERVIDOR (css,scripts,imagens)
server.use(express.static("public"))

//Rotas da Aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

//Start do Servidor
.listen(5500)

