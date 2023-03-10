const express = require('express')
const app = express();

const port = 3000;

app.get('/' ,(req,res)=>{
   res.send('hello👋 test🐞')
})
app.listen(port, ()=>{
   console.log(`✅ sever is running on http://localhost:${port}`)
})