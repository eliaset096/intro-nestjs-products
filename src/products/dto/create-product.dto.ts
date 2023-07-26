import { IsString, IsNumber , IsOptional,} from "class-validator";

export class CreateProductDto {
   
    @IsString()
    name: string;

   @IsNumber()
    price: number;

    @IsString()
    @IsOptional()
    description?: string;

    @IsString()
    @IsOptional()
    image?: string;

    @IsNumber()
    stock: number;
}
