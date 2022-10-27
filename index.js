const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const Port = process.env.port || 5000;
const learningData =require('./data/learningData.json')
app.get  ('/',(req,res)=>{
    res.send(learningData)
})
app.get  ('/homepage',(req,res)=>{
    res.send(learningData)
})
app.get  ('/homepage/:id',(req,res)=>{
    const id = req.params.id;
    const lend = learningData?.find(L =>L.id===id)
    res.send(lend)
})

app.listen(Port,()=>{
    console.log('server is running ',Port);
})
