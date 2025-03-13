import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MatriculaService {

    constructor(private prisma: PrismaService) { }



    async addDisciplinaToAluno(alunoId: number, disciplinaId: number) {

        const aluno = await this.prisma.aluno.findUnique({
            where: { id: alunoId },
        });
        if (!aluno) {
            throw new NotFoundException(`Aluno com id ${alunoId} não encontrado`);
        }

        // Atualiza o aluno conectando a disciplina
        return this.prisma.aluno.update({
            where: { id: alunoId },
            data: {
                disciplinas: {
                    connect: { id: disciplinaId },
                },
            },
        });
    }
}
