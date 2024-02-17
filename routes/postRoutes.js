const express = require("express")
const router = express.Router()

const {get_product, get_id, get_search,post_product, put_product, delet_porduct} = require("../controllers/postController")

router.get("/user", (req, res)=>{
    res.send("test Week Challenge")
})

router.get("/products", get_product)
router.get("/products/search", get_search)
router.get("/products/:id", get_id) 
router.post("/products", post_product)
router.put("/products/:id", put_product)
router.delete("/products/:id", delet_porduct) 

module.exports = router