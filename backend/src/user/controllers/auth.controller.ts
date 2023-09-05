import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignInDto } from '../dtos/sign-in.dto';
import { SignUpDto } from '../dtos/sign-up.dto';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    @Post('/sign-in')
    async signIn(@Body() signInDto: SignInDto) {
        const user = await this.userService.findByUsername(signInDto.username);
        if (!user) throw new BadRequestException('Invalid credentials');
        if (user.provider === 'basic' && user.password) {
            if (!await bcrypt.compare(signInDto.password, user.password))
                throw new BadRequestException('Invalid credentials');
        }
        const accessToken = await this.jwtService.signAsync({ id: user.id }, { secret: 'sec' })
        delete user.password;
        return { user, accessToken };
    }

    @Post('/sign-up')
    async signUp(@Body() signUpDto: SignUpDto) {
        const isExist = await this.userService.findByUsername(signUpDto.username);
        if (isExist) throw new BadRequestException('Username is already existed');
        if (signUpDto.password) {
            const hashedPassword = await bcrypt.hash(signUpDto.password, 10);
            signUpDto.password = hashedPassword
        }
        return this.authService.create(signUpDto);
    }

    @Post('/sign-out')
    async signOut(@Body() signUpDto: SignUpDto) {
    }
}
