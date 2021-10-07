const express = require('express')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
port = process.env.PORT || 3000
//const cors = require(cors)
//app.use(cors())


app.get('/',(req,res)=>{
    res.render('pages/index.ejs')
})

app.listen(port,()=>{
    console.log('i am your listening Server Hi')
})