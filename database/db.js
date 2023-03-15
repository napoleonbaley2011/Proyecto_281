const mysql = require('mysql')

const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_DATABASE,
})

con.connect((error)=>{
    if(error){
        console.log('error de conexion '+error)
        return
    }
    console.log('conectado')
})

module.exports = con