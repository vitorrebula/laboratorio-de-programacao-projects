import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register/professor')
    registerProfessor(@Body() dto: AuthDto) {
        console.log(dto);
        return this.authService.registerProfessor(dto);
    }

    @Post('register/aluno')
    registerAluno(@Body() dto: AuthDto) {
        console.log(dto);
        return this.authService.registerAluno(dto);
    }

    @Post('login')
    login() {
        return this.authService.login();
    }

}