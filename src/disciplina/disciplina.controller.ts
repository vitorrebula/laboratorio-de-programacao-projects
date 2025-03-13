import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { DisciplinaService } from './disciplina.service';

@Controller('disciplina')
export class DisciplinaController {
    constructor(private disciplinaService: DisciplinaService) { }



    @Post('inicia')
    async seed() {
        return this.disciplinaService.iniciaDisciplinas();
    }

    @Get(':disciplinaId/alunos')
    async getAlunosPorDisciplina(@Param('disciplinaId', ParseIntPipe) disciplinaId: number) {
        return this.disciplinaService.getAlunosPorDisciplina(disciplinaId);
    }
}
