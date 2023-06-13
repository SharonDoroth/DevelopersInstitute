const {db} = require('../config/dbsql.js');

const getAllProducts = () => {
    return db('products')
    .select('id','name','price')
    .orderBy('name')
}


module.exports = {
    getAllProducts
}