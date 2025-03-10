import {
    IsEmail,
    IsNotEmpty,
    IsString
} from "class-validator";


export class RegisterDto {

    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    senha: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;

    @IsNotEmpty()
    dataNascimento: Date;
}