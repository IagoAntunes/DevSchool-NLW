const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://github.com/diego3g.png", 
        whatsapp: "51900000000", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
      }
      classValue = {
        subject: 1, 
        cost: "20",
        //o proffy id vira pelo banco de dados
    }

    classScheduleValues = [
        //class_id vira pelo banco de dados, apos cadastrarmos a class
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
        weekday: 0,
        time_from: 520,
        time_to: 1220
    }
    ]


    //await createProffy(db,{proffyValue, classValue,classScheduleValue})

    // Consultar os Dados Inseridos



})