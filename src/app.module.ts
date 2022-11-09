import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosService } from './productos/productos.service';
import { ProductosController } from './productos/productos.controller';
import { Productos1Controller } from './productos1/productos1.controller';
import { Productos1Service } from './productos1/productos1.service';

@Module({
  imports: [],
  controllers: [AppController, ProductosController, Productos1Controller],
  providers: [AppService, ProductosService, Productos1Service],
})
export class AppModule {}
