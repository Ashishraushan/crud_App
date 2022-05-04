const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb://localhost:27017/crud-test",{useNewUrlParser:true,useUnifiedTopology:true}).then(() =>{
    console.log("connected with mongodb")
}).catch (() =>{
    console.log(error)
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());


// database schema

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
})
// database model
 const Product = new mongoose.model("Product",productSchema)


 app.get("/", (req,res) =>{
     res.send("<h1>server page</h1>")
 })

//  create product
app.post("/api/v1/product/new", async(req,res) =>{
    const product = await Product.create(req.body);

    res.status(200).json({
        success:true,
        product
    })
})

// Raed product

    app.get("/api/v1/products",async(req,res) =>
    {
        const products = await Product.find();
        res.status(200).json({success:true,products})
    })

    // 
    
    app.put("/api/v1/product/:id",async(req,res) =>{

        let product = await product.findById(req.params.id);
        product = await Product.findById(req,params.id, req.body.{
            new:true,
            UsefindAndModify:false,
            runvalidators:true
        }

    })

app.listen(4500, () =>{
    console.log("server is working http://localhost:4500 ")
})