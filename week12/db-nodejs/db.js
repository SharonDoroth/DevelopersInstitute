const knex = require('knex');

const db = knex({
  client: "pg",
  connection: {
    host: "lucky.db.elephantsql.com",//localhost 127.0.0.1
    port: "5432",
    user: "eevmpucv",//postgres
    password: "3j4OGfm86t-7lIePBr2kQTmRY-G-GftS",//123456
    database: "evmpucv"//dvdrental
  },
});

db.select('id','name','price')
.from('products')
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err);
})
