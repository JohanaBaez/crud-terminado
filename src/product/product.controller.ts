import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Delete, Patch } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/product.dto";

@Controller('product')
export class ProductController {
    constructor (
        private readonly ProductServiceRepo: ProductService) {}

        //metodo para crear un producto
        @Post()
        create(@Body() productdto: CreateProductDto) {
            return this.ProductServiceRepo.create(productdto)
        }

        //metodo para mostrar los productos
        @Get()
        findAll() {
            return this.ProductServiceRepo.findAll();
        }

        //metodo para mostrar un producto especifico
        @Get(':id')
        findOne(@Param('id', ParseUUIDPipe) id: string) {
                return this.ProductServiceRepo.findOne(id);
            } 

        // Para eliminar   
        @Delete(':id')
        remove(@Param('id', ParseUUIDPipe) id: string) {
            return this.ProductServiceRepo.remove(id);
        }

        // crear metodo patch, para actualizar 
        @Patch(':id')
        update(
            @Param('id', ParseUUIDPipe) id: string,
            @Body() updateProductDto: CreateProductDto,
        ){
        return this.ProductServiceRepo.update(id, updateProductDto);
  }
}
