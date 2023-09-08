import { IsNotEmpty, IsOptional, IsString } from "class-validator";


export class CreateCommentDto {
    @IsNotEmpty()
    @IsString()
    content: string;

    @IsOptional()
    @IsString()
    author: string;
}