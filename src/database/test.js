const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {

  /*
  // Inserir dados na tabela
  await saveOrphanage(db, {
      lat: "-14.7869081",
      lng: "-39.2675991",
      name: "Lar Dos Meninos",
      about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
      whatsapp: "987654321",
      images: [
        "https://images.unsplash.com/photo-1605221310464-a83e9de37422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        "https://images.unsplash.com/photo-1611690826251-bf199ae9aae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
      ].toString(),
      instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
      opening_hours: "Horário de visitas Das 18h até 8h",
      open_on_weekends: "0"
  })
  */

  
  // Consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages) 


  /*
  // Consultar somente 1 orphanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "10"')
  console.log(orphanage) 
  */

  /*
  // Consultar somente 1 orphanato, pelo id
  const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "11"')
  console.log(orphanage) 
  */

  /*
  // Deletar dados da tabela
  console.log(await db.run("DELETE FROM orphanages WHERE id = '9'"))
  */
  
})