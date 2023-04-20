import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Computer } from './entities/computers.entity';
import { ComputerController } from './computers.controller';
import { ComputerService } from './computers.service';

@Module({
  imports: [TypeOrmModule.forFeature([Computer])],
  controllers: [ComputerController],
  providers: [ComputerService],
})
export class ComputerModule {}
