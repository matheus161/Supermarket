const { findOne } = require("../models/Product");
const Product = require("../models/Product");

class ProductController {
    
    async show(req, res) {
        try {
            const id = req.params.id;

            const product = await Product.findById(id);

            if (!product)
                return res.status(404).json({ message: "Product not found" });

            return res.status(200).json(product);
        } catch (error) {
            return res.status(500).json({ message: "Internal server error " });
        }
    }

    async index(req, res) {
        try {
            const products = await Product.find({});

            return res.status(200).json(products);
        } catch (error) {
            return res.status(500).json({ message: "Internal server error " });
        }
    }

    async store(req, res) {
        try {
            const { name, price, quantity } = req.body;                                        
                
            const product = await Product.create({
                name,
                price,
                quantity
            });
            return res.status(201).json(product);
        } catch (error) {            
            return res.status(500).json({ message: "Internal server error " })
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const data = req.body;
            
            const productUpdate = await Product.updateOne(
                { _id: id },
                {
                    $set: { ...data },
                }
            );
            const product = await Product.findById(id);

            if(!product)
                return res.status(404).json({ message: "Product not found"});

            return res.status(200).json(product);;
        } catch (error) {
            return res.status(404).json({ message: "Internal server error"});
        }
    }

    async destroy(req, res){
        try {
            const id = req.params.id;

            const product = await Product.findByIdAndDelete(id);

            if(!product)
                return res.status(404).json({ message:"Product not found"});
            
            
            return res.status(200).json(product);
        } catch (error) {
            return res.status(404).json({ message: "Internal server error"}); 
        }
    }
}

module.exports = new ProductController();