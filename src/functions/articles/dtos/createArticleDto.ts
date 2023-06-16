import { IsNotEmpty, IsString } from 'class-validator';

export class CreateArticleDto {
   @IsNotEmpty()
   @IsString()
   id: string;

   @IsNotEmpty()
   @IsString()
   title: string;

   @IsNotEmpty()
   @IsString()
   description: string;

   @IsNotEmpty()
   @IsString()
   created: string;
}
