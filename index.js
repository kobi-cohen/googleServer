const express = require('express')
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.urlencoded({
   extended: true
 }));

app.use(express.json())


const searchValue = {value:'empty'}

app.get('/',(req,res)=>{
   res.send('general page!')
})
app.post('/set',(req,res)=>{
   console.log('Post action was fired !')
   searchValue.value=req.body.value
   console.log(req.body)
   res.send('value was set !')
})


app.get('/get',(req,res)=>{
   console.log('Get action was fired !')
    res.redirect('https://www.google.com/search?q='+searchValue.value+'&tbm=isch')
})

app.listen(port,()=>{
   console.log('connected - '+port)
})