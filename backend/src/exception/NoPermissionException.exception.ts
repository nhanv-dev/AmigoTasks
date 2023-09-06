import { HttpException, HttpStatus } from '@nestjs/common';

export class NoPermissionException extends HttpException {
    
    constructor() {
        super('Do not have permission', HttpStatus.BAD_REQUEST);
    }
}