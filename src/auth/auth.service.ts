import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from "argon2";

@Injectable()

export class AuthService {
    constructor(private prisma: PrismaService) { }

    async registerProfessor(dto: AuthDto) {
        const hash = await argon.hash(dto.senha);
        console.log(process.env.DATABASE_URL);
        return this.prisma.professor.create({
            data: {
                nome: dto.nome,
                email: dto.email,
                senha: hash,
                cpf: dto.cpf,
                dataNascimento: dto.dataNascimento
            }
        })

    }

    async registerAluno(dto: AuthDto) {
        const hash = await argon.hash(dto.senha);
        return this.prisma.aluno.create({
            data: {
                nome: dto.nome,
                email: dto.email,
                senha: hash,
                cpf: dto.cpf,
                dataNascimento: dto.dataNascimento
            }
        })

    }


    login() {
        return 'login';
    }

}