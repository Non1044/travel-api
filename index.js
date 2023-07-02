const express = require('express')
require('dotenv').config()
var cors = require('cors')
const mysql=require('mysql2')
const app = express()

app.use(cors())

const connection=mysql.createConnection(process.env.DATABASE_URL)

app.get('/', (req,res) => {
    res.send('hello world!!')
})

app.get('/attractions',(req,res)=>{
    connection.query(
        'SELECT * FROM attractions',
        function(err,results,fields){
            res.send(results)
        }
    )
})

app.listen(process.env.PORT || 3000)
// connection.end()