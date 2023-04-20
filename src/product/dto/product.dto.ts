import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateProductDto {
  
  @IsString()
  @IsNotEmpty()
  @MinLength(20)
  brand: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  ram: number;

  @IsString()
  procesador: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsNumber()
  Disco_duro: number;

  @IsNotEmpty()
  @IsString()
  grafica: string;







}

