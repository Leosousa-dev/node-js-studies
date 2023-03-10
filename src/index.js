const puppeteer = require('puppeteer');
const express = require('express');

const app = express();

const port = 3000;
const url = 'https://br.pinterest.com/'

app.get('/' ,async(req,res)=>{
   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto(url);
   await page.screenshot({path: 'src/screenshots/screenshot.png'});
   await browser.close();
   res.send(
      'ok✔️'
   )
})
app.listen(port, ()=>{
   console.log(`✅ sever is running on http://localhost:${port}`)
})