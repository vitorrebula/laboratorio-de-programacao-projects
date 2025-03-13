import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AlunoModule } from './aluno/aluno.module';
import { ProfessorModule } from './professor/professor.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { MatriculaModule } from './matricula/matricula.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    AlunoModule,
    ProfessorModule,
    PrismaModule,
    DisciplinaModule,
    MatriculaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
