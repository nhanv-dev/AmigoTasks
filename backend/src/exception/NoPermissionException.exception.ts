import { HttpException, HttpStatus } from '@nestjs/common';

export class NoPermissionException extends HttpException {
  constructor(message?: string) {
    super(message || 'Do not have permission', HttpStatus.BAD_REQUEST);
  }
}
