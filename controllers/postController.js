const products = require("../products.json")
const fs = require("fs")

function save_data(){
    const js_str = JSON.stringify(products, null , 2)
    fs.writeFileSync("./products.json", js_str)
}

const get_product = (req, res)=>{
    res.send(products)
}
const get_search = (req, res)=>{
    const min = req.query.minPrice
    const max = req.query.maxPrice
    const find_product = products.filter(x=> x.price >= min && x.price <= max)
    res.send(find_product)
}
//----------------------------------------------------
// const get_id = (req, res)=>{
    //     const id = req.params.id
    //     const ndx = parseInt(id) - 1
    //     res.send(products[ndx])
    // }
    const get_id = (req, res)=>{
    const id = req.params.id
    const find_id = products.filter(x => x.id == id)
    res.send(find_id)
}
    // if (find_id[0]) res.send(find_id)
    // else res.send("this id does not exist")
//----------------------------------------------------

const post_product = (req, res)=>{
    const data = req.body
    products.push(data)
    res.send("created")
    save_data()
}

const put_product = (req, res)=>{
    const id_url = req.params.id
    const find_id = products.filter(x => x.id == id_url)
    const { name , price} = req.body
    find_id[0].name = name
    find_id[0].price = price
    res.send("Updated")
    save_data()
}
const delet_porduct = (req, res)=>{
    const id_url = req.params.id
    const find_obj = products.findIndex(x=>x.id == id_url)
    products.splice(find_obj,1)
    res.send(products)
    save_data()
}
module.exports = {get_product, get_id, get_search, put_product,post_product, delet_porduct}