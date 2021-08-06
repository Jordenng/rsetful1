const express = require('express');
const app = express();
const path= require('path')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

const comments = [
    {
    username:'rodd',
    comment:'lol funny'},
    {
    username:'skyler',
    comment:'lolz funny'
}]

app.get('/comments',(req,res)=>{
    res.render('comments/index',{comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new')
})

app.post('/comments',(req,res)=>{
    const {username, comment} = req.body;
    comments.push({ username, comment })
    res.redirect('/comments')
})

app.get('/tacos', (req,res)=>{
    res.send("get / tacos response")
})

app.post('/tacos',(req,res)=>{
    const {meat, qty}=res.body
    res.send('post')
})

app.listen(3000,()=>{
    console.log("on port 3000")
})