const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use.(express.json());

app.listen(process.env.PORT, ()=>{
    console.log('run on ${process.env.PORT})
})
app.use(product_router.router)