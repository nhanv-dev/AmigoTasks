import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignInDto } from '../dtos/sign-in.dto';
import { SignUpDto } from '../dtos/sign-up.dto';
import { AuthService } from '../services/auth.service';
import { UserService } from 'src/module/user/services/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  @Post('/sign-in')
  async signIn(@Body() signInDto: SignInDto) {
    const user = await this.authService.validateUser(
      signInDto.username,
      signInDto.password,
      signInDto.provider,
    );
    const accessToken = await this.jwtService.signAsync({ id: user.id }, { secret: '123' });
    delete user.password;
    console.log(`Signed in with ${user.provider}:`, user.username);
    return { user, accessToken };
  }

  @Post('/sign-up')
  async signUp(@Body() signUpDto: SignUpDto) {
    const isExist = await this.userService.findByUsername(signUpDto.username);
    if (isExist) throw new BadRequestException('Username is already existed');
    if (signUpDto.password) {
      const hashedPassword = await bcrypt.hash(signUpDto.password, 10);
      signUpDto.password = hashedPassword;
    }
    return this.authService.create(signUpDto);
  }

  @Post('/sign-out')
  async signOut(@Body() signUpDto: SignUpDto) { }
}
