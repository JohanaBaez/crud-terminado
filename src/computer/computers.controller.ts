import { Body, Controller, Get, Param, ParseUUIDPipe, Post, Delete, Patch } from "@nestjs/common";
import { ComputerService } from "./computers.service";
import { CreateComputerDto } from "./dto/computers.dto";

@Controller('COMPUTADORA')
export class ComputerController {
    constructor (
        private readonly ComputerServiceRepo: ComputerService) {}

        //metodo para crear un producto
        @Post()
        create(@Body() productodto: CreateComputerDto) {
            return this.ComputerServiceRepo.create(productodto)
        }

        //metodo para mostrar los productos
        @Get()
        findAll() {
            return this.ComputerServiceRepo.findAll();
        }

        //metodo para mostrar un producto especifico
        @Get(':id')
        findOne(@Param('id', ParseUUIDPipe) id: string) {
                return this.ComputerServiceRepo.findOne(id);
            } 

        // Para eliminar   
        @Delete(':id')
        remove(@Param('id', ParseUUIDPipe) id: string) {
            return this.ComputerServiceRepo.remove(id);
        }

        // crear metodo patch, para actualizar 
        @Patch(':id')
        update(
            @Param('id', ParseUUIDPipe) id: string,
            @Body() updatePcDto: CreateComputerDto,
        ){
        return this.ComputerServiceRepo.update(id, updatePcDto);
  }
}
