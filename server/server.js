const express = require('express')
const {products} = require('./config/data.js')
console.log(products);
const app = express();

app.listen(3001, ()=>{
    console.log('running on port 3001');
})
//GET - READ - get all products
app.get('/api/products', (res,res)=>{
    res.json(products)
})
//GET - READ - get one products
app.get('/api/products/:product_id',(req,res)=>{
    console.log(req.params);
    res.send('ok ')
})