import { Body, Controller, Param, Patch } from '@nestjs/common';
import { MatriculaService } from './matricula.service';

@Controller('matricula')
export class MatriculaController {
    constructor(private matriculaService: MatriculaService) { }

    @Patch(':alunoId/add-disciplina')
    async addDisciplina(
        @Param('alunoId') alunoId: string,
        @Body('disciplinaId') disciplinaId: number,
    ) {
        const id = parseInt(alunoId, 10);
        return this.matriculaService.addDisciplinaToAluno(id, disciplinaId);
    }

}
