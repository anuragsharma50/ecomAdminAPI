import mongoose from "mongoose";
import { productSchema } from "./product.schema.js";

const ProductModel = mongoose.model('product',productSchema);

export default class ProductRepository {

    // to create a product
    async addProduct({name,quantity}) {
        try {
            const product = new ProductModel({name,quantity});
            product.save();
            return {success: true,res:product}
        } catch (err) {
            return {success: false,error:{
                statusCode: 400,
                msg: err
            }}
        }
    }

    // to get all products
    async getAllProducts() {
        try {
            const products = await ProductModel.find({});
            return {success: true,res:products}
        } catch (err) {
            return {success: false,error:{
                statusCode: 400,
                msg: err
            }}
        }
    }

    // to delete a product by productId
    async deleteProduct(productId) {
        try {
            const product = await ProductModel.findByIdAndDelete(productId);

            if(!product){
                return {success: false,error:{
                    statusCode: 404,
                    msg: "Product not found"
                }}
            }

            return {success: true,res:product}
        } catch (err) {
            return {success: false,error:{
                statusCode: 400,
                msg: err
            }}
        }
    }

    // update(increase or decrease quantity of a product using productId)
    async updateQuantity({productId,number}) {
        try {
            const product = await ProductModel.findById(productId);
            product.quantity += Number(number);
            await product.save();

            if(!product){
                return {success: false,error:{
                    statusCode: 404,
                    msg: "Product not found"
                }}
            }

            return {success: true,res:product}
        } catch (err) {
            return {success: false,error:{
                statusCode: 400,
                msg: err
            }}
        }
    }

}
