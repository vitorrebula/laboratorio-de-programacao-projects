import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { RegisterDto } from "./dto";
import * as argon from "argon2";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { LoginDto } from "./dto/login.dto";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { access } from "fs";

@Injectable()

export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService
    ) { }

    async registerProfessor(dto: RegisterDto) {
        const hash = await argon.hash(dto.senha);
        try {

            return await this.prisma.professor.create({
                data: {
                    nome: dto.nome,
                    email: dto.email,
                    senha: hash,
                    cpf: dto.cpf,
                    dataNascimento: dto.dataNascimento
                }
            })
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {

                    throw new ForbiddenException('credentials taken');
                }
            }
            throw error;
        }

    }

    async registerAluno(dto: RegisterDto) {
        const hash = await argon.hash(dto.senha);
        try {

            return await this.prisma.aluno.create({
                data: {
                    nome: dto.nome,
                    email: dto.email,
                    senha: hash,
                    cpf: dto.cpf,
                    dataNascimento: dto.dataNascimento
                }
            })

        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
                throw new ForbiddenException('credentials taken');
            }
            throw error;

        }
    }


    async loginProfessor(dto: LoginDto) {
        const professor = await this.prisma.professor.findUnique({
            where: {
                email: dto.email
            }
        });
        if (!professor) {
            throw new ForbiddenException('invalid credentials');
        }
        const match = await argon.verify(professor.senha, dto.senha);
        if (!match) {
            throw new ForbiddenException('invalid credentials');
        }
        return this.signToken(professor.id, professor.email);
    }

    async loginAluno(dto: LoginDto) {
        const aluno = await this.prisma.aluno.findUnique({
            where: {
                email: dto.email
            }
        });
        if (!aluno) {
            throw new ForbiddenException('invalid credentials');
        }
        const match = argon.verify(aluno.senha, dto.senha);
        if (!match) {
            throw new ForbiddenException('invalid credentials');
        }
        return this.signToken(aluno.id, aluno.email);
    }


    async signToken(
        userId: number,
        email: string
    ): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            email
        };

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: this.config.get('JWT_SECRET')
        });

        return {
            access_token: token,
        };
    }


}