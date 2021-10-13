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
let pageCounter = 0;

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
app.get('/pages/:page/:id',(req,res)=>{
    axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}&language=en-US`)
    .then(function(response){
        res.render('pages/filmDetails.ejs',{details:response.data})
    })
    .catch(function(error){
        console.log(error)
    })
})
app.get('/search-for',(req,res)=>{
    pageCounter += 1;
    console.log(req.query.keyword)
    if (pageCounter < 500 ){
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&page=${pageCounter}&query=${req.query.keyword}`)
        .then(function(response){
            res.render('pages/founded.ejs',{found:response.data.results,keyword:req.query.keyword})
           
        })
        .catch(function(error){
            console.log(error)
        })
    }else{
        pageCounter = 1
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&page=${pageCounter}&query=${req.query.keyword}`)
        .then(function(response){
            res.render('pages/founded.ejs',{found:response.data.results,keyword:req.query.keyword})
           
        })
        .catch(function(error){
            console.log(error)
        })
    }
   
})