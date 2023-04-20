import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/product.dto';
import { Product } from './entities/product.entity';


@Injectable()
export class ProductService{
    constructor (
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
        ) {}

        //metodo para agregar producto 

        async create(productdto: CreateProductDto) {
            const product = this.productRepository.create(productdto);
            await this.productRepository.save(productdto)

            return product;
        }

        //Metodo para visualizar todos los productos 
        findAll() {
            return this.productRepository.find();
        }

        //metodo para visualizar un producto especifico
        findOne(id: string) {
            return this.productRepository.findOneBy({ id}); 
        }

        //remover un producto especifico
        async remove(id: string) {
            const product = await this.findOne(id);
            await this.productRepository.remove(product);
            return 'producto eliminado sastifactoriamante';
        }

        //actualizar un producto especifico
        async update(id: string, cambios: CreateProductDto) {
            const findProduct = await this.findOne(id); 
            const updatedProduct = await this.productRepository.merge(
                findProduct,
                cambios,
            );

            return this.productRepository.update(id, updatedProduct);
        }

       
}