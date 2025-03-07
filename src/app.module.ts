import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AlunoModule } from './aluno/aluno.module';
import { ProfessorModule } from './professor/professor.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [AuthModule, AlunoModule, ProfessorModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
