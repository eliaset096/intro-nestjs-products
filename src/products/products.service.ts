import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  private produts: Product[] = [];

  constructor() {}

  create(createProductDto: CreateProductDto) {

    const id = this.produts.length + 1;

    this.produts.push({
      ...createProductDto,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return this.produts[this.produts.length - 1];
  }

  findAll() {
    return this.produts;
  }

  findOne(id: number) {
    return this.produts.find((item) => item.id === id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.produts.findIndex((item) => item.id === id);
      this.produts[index] = {
        ...product,
        ...updateProductDto
      }
      return this.produts[index];
    }

    return 
  }

  remove(id: number) {
    const index = this.produts.findIndex((item) => item.id === id);
    const product = this.produts[index];
    if (index >= 0) {
      this.produts.splice(index, 1);
    }
    return product;
  }




  loadProductsBill(
    file: Express.Multer.File
  ) {
    console.log('file en el servicio', file);
    return file;
  }


}
