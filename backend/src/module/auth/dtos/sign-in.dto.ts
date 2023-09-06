import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { AccountProvider } from 'src/module/user/entities/user.entity';
 
export class SignInDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsEnum(AccountProvider)
  @IsOptional()
  provider: AccountProvider = AccountProvider.CREDENTIALS;
}
