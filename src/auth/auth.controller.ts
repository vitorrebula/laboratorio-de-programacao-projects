import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./dto";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register/professor')
    registerProfessor(@Body() dto: RegisterDto) {
        console.log(dto);
        return this.authService.registerProfessor(dto);
    }

    @Post('register/aluno')
    registerAluno(@Body() dto: RegisterDto) {
        console.log(dto);
        return this.authService.registerAluno(dto);
    }

    @Post('login/aluno')
    loginProfessor(@Body() dto: LoginDto) {
        return this.authService.loginProfessor(dto);
    }

    @Post('login/aluno')
    loginAluno(@Body() dto: LoginDto) {
        return this.authService.loginAluno(dto);
    }

}