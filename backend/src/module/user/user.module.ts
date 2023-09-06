import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controllers/user.controller';
import { User, UserSchema } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  exports: [UserService, UserRepository],
  providers: [UserService, JwtService, UserRepository],
})
export class UserModule { }
