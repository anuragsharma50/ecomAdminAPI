import ProductRepository from "./product.repository.js";


export default class ProductController {

    constructor() {
        // creating object of ProductRepositor class inside constructor so that we can acess it in any method
        this.productRepository = new ProductRepository;
    }

    // to create a product - data required as inputs are name and quantity
    async createProduct(req,res,next) {
        const {name,quantity} = req.body;
        const resp = await this.productRepository.addProduct({name,quantity})
        if(resp.success){
            res.status(201).json({data:{product:resp.res}});
        } else{
            res.status(resp.error.statusCode).json({error:resp.error.msg});
        }
    }

    // to get all products
    async getAllProducts(req,res,next) {
        const resp = await this.productRepository.getAllProducts();
        if(resp.success){
            res.status(201).json({data:{products:resp.res}});
        } else{
            res.status(resp.error.statusCode).json({error:resp.error.msg});
        }
    }

    // to delete a product by productId
    async deleteProduct(req,res,next) {
        const productId = req.params.id;
        const resp = await this.productRepository.deleteProduct(productId)
        if(resp.success){
            res.status(201).json({data:{message: "product deleted"}});
        } else{
            res.status(resp.error.statusCode).json({error:resp.error.msg});
        }
    }

    // update(increase or decrease quantity of a product using productId)
    async updateQuantity(req,res,next) {
        const productId = req.params.id;
        const {number} = req.query;
        const resp = await this.productRepository.updateQuantity({productId,number})
        if(resp.success){
            res.status(201).json({data:{product:resp.res,message: "updated successfully"}});
        } else{
            res.status(resp.error.statusCode).json({error:resp.error.msg});
        }
    }

}