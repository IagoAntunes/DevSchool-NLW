  
const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
  //Inserir dados
  proffyValue = {
    name: "Diego Fernandes",
    avatar: "https://github.com/diego3g.png", 
    whatsapp: "51900000000", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
  }

  classValue = {
    subject: 1, 
    cost: "20", 

  }

  classScheduleValues = [
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

  // Todos os Proffys
const selectedProffys = await db.all("SELECT * FROM proffys")

  // Consultar as classes de um determinado professor
  // e trazer junto os dados do professor


  //console.log(selectClassesAndProffys)

  // O horario que a pessoa trabalhar por exemplo é das 8h-18h
  // O horario do time_from 8h precisa ser antes ou igual ao horario solicitado
  // o time_to precisa ser acima
  const selectClassesAndProffys = await db.all(`
  SELECT classes.*, proffys.*
  FROM proffys
  JOIN classes ON (classes.proffy_id = proffys.id)
  WHERE classes.proffy_id = 1
`)

const selectClassesSchedules = await db.all(`
  SELECT class_schedule.*
  FROM class_schedule
  WHERE class_schedule.class_id = "1"
  AND class_schedule.weekday = "0"
  AND class_schedule.time_from <= "520"
  AND class_schedule.time_to > "520"
`) 
  //console.log(selectClassesSchedules)

})