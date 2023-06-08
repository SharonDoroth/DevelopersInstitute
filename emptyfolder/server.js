const express = require('express')
const {products} = require('./config/data.js')
console.log(products);
const app = express();



app.listen(3001, ()=>{
    console.log('running on port 3001');
})

//GET - READ - get all products
app.get('/api/products', (req,res)=>{
    res.json(products)
})

// POST - CREATE
app.post('/api/products',(req,res)=>{
    //console.log(req.body);
    products.push(req.body);
    res.json(products)
})

//DELETE - DELETE 
//by the id 
// /api/products/11
app.delete('api/products/:id',(req,res)=>{
    const id = req.params.id
    const index = products.findIndex(item => item.id == id)
    if(index === -1){
        return res.status(404).json({msg:'not found'})
    }
    products.splice(index,1);
    res.json(products)
})

//PUT - update -modify product
// /api/products/11 - params
//{"name":"iphone14",price:8000} - body
app.put('api/products/:id', (req,res)=> {
    const id = req.params.id
    const index = products.findIndex(item => item.id == id)
    if(index === -1){
        return res.status(404).json({msg:'not found'})
    }
    products[index] ={
        ...products[index],
        name: req .body.name,
        price: req.body.price
    }
    res.json(products)
})

//GET - READ - get one products
app.get('/api/products/:product_id',(req,res)=>{
    //console.log(req.params);
    const id = req.params.product_id;
    const product = products.find(item => item.id == id)
    if(!product){
        return res.status(404).json({message:"Product not found"})
    }
    res.json(product)
})

//search for a product by name
//GET - READ - query localhost:3001/api/search?name=ip
app.get('/api/search', (req,res)=>{ 
    //console.log(res,query);
    const product_name = req.query.name;
    const filtered = products.filter(item =>{
        return item.name.toLowerCase().includes(product_name.toLowerCase())
    })
    res.send('ok ok')
})