import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AlunoModule } from './aluno/aluno.module';
import { ProfessorModule } from './professor/professor.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    AlunoModule,
    ProfessorModule,
    PrismaModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
