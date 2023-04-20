import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateComputerDto } from './dto/computers.dto';
import { Computer } from './entities/computers.entity';



@Injectable()
export class ComputerService{
    constructor (
        @InjectRepository(Computer)
        private readonly pcRepository: Repository<Computer>,
        ) {}

        //metodo para agregar producto 

        async create(pcdto: CreateComputerDto) {
            const pc = this.pcRepository.create(pcdto);
            await this.pcRepository.save(pc)

            return pc;
        }

        //Metodo para visualizar todos los productos 
        findAll() {
            return this.pcRepository.find();
        }

        //metodo para visualizar un producto especifico
        findOne(id: string) {
            return this.pcRepository.findOneBy({ id}); 
        }

        //remover un producto especifico
        async remove(id: string) {
            const pc = await this.findOne(id);
            await this.pcRepository.remove(pc);
            return 'pc eliminado sastifactoriamante';
        }

        //actualizar un producto especifico
        async update(id: string, cambios: CreateComputerDto) {
            const findPc = await this.findOne(id); 
            const updatedPc = await this.pcRepository.merge(
                findPc,
                cambios,
            );

            return this.pcRepository.update(id, updatedPc);
        }

       
}