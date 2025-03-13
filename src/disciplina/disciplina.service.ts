import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DisciplinaService {
    constructor(private prisma: PrismaService) { }


    async iniciaDisciplinas() {
        const disciplinas = [
            { nome: 'Matemática' },
            { nome: 'Português' },
            { nome: 'História' },
            { nome: 'Geografia' },
            { nome: 'Ciências' },
            { nome: 'Inglês' },
            { nome: 'Física' },
            { nome: 'Química' },
        ];

        return this.prisma.disciplina.createMany({
            data: disciplinas,
            skipDuplicates: true,
        });
    }


    async getAlunosPorDisciplina(disciplinaId: number) {
        const disciplina = await this.prisma.disciplina.findUnique({
            where: { id: disciplinaId },
            include: { alunos: true },
        });

        if (!disciplina) {
            throw new NotFoundException(`Disciplina com id ${disciplinaId} não encontrada`);
        }

        return disciplina.alunos;
    }

}
