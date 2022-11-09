import { Controller, Get, Post } from '@nestjs/common';
import { Productos1Service } from './productos1.service';

@Controller('productos1')
export class Productos1Controller {
    constructor(private readonly productos1Service: Productos1Service) {}

   @Get()
   getProductos1()  {
      return this.productos1Service.getProductos1();
    }
}