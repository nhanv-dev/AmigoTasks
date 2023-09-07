import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class TokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    console.log(req.method, req.url, 'Have token', !!token);
    next();
  }
}
