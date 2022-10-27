const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = process.env.port || 4000;
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

app.listen(port,()=>{
    console.log('server is running ',port);
})
