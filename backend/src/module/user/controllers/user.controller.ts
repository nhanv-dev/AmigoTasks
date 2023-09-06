import { AuthGuard } from '@nestjs/passport';
import { AccountProvider } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Get('/:id')
  @UseGuards(AuthGuard('jwt'))
  async getById(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get('/username/:username')
  async getByUsername(
    @Param('username') username: string,
    @Query('provider') provider: AccountProvider,
  ) {
    return this.userService.findByUsername(username, provider);
  }
}
