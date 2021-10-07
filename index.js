const express = require('express')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')
const dotenv = require('dotenv')
require('dotenv').config()
const result = dotenv.config()
const axios = require('axios')
port = process.env.PORT || 3000
var cors = require('cors')
app.use(cors())


app.listen(port,()=>{
    console.log('i am your listening Server Hi')
})

app.get('/',(req,res)=>{
    res.redirect('/pages/1')
})

app.get('/pages/:page',(req,res)=>{
    axios.get(`
    https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=${Number(req.params.page)}`)
    .then(function(response){
        
        res.render('pages/index.ejs',{pages:req.params.page,movies:response.data.results})
    })
    .catch(function(error){
        console.log(error)
    })
    
})