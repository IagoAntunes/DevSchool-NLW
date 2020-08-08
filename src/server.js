//Servidor
const express = require('express');
const server = express();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')
//Nunjuck
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})


// Receber os dados do req.body
server
.use(express.urlencoded({ extended: true }))
//Configurar arquivos estaticos SERVIDOR (css,scripts,imagens)
.use(express.static("public"))
//Rotas da Aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)

//Start do Servidor
.listen(5500)



