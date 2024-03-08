import express from "express";
import ProductController from "./product.controller.js";

const ProductRouter = express.Router();

// creating object of ProductController class
const productController = new ProductController();

// to create a product
ProductRouter.post('/create',(req,res,next) => {
    productController.createProduct(req,res,next);
})

// to get all products
ProductRouter.get('/',(req,res,next) => {
    productController.getAllProducts(req,res,next);
})

// to delete a product by productId
ProductRouter.delete('/:id',(req,res,next) => {
    productController.deleteProduct(req,res,next);
})

// update(increase or decrease quantity of a product using productId)
ProductRouter.post('/:id/update_quantity/',(req,res,next) => {
    productController.updateQuantity(req,res,next);
})

export default ProductRouter;