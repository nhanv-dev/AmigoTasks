import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundDataException extends HttpException {
  constructor(message?: string) {
    super(message || `Data invalid`, HttpStatus.FORBIDDEN);
  }
}
