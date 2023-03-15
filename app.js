const express = require('express')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

dotenv.config({path:'./env/.env'})

//app.use(cookieParser)

app.use('/',require('./routes/router'))

/*app.get('/',(req, res)=>{
    res.render("index")
})*/


app.listen(3000, () => {
    console.log('SERVER UP runnung in http://localhost:3000')
})