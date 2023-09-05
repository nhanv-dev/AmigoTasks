import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SignInDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsOptional()
    password: string;
}
