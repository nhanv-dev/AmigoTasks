import { HttpException, HttpStatus } from '@nestjs/common';

export class NotFoundDataException extends HttpException {
    constructor() {
        super('Data invalid', HttpStatus.FORBIDDEN);
    }
}