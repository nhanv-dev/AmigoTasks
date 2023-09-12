import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { NoPermissionException } from 'src/exception/NoPermissionException.exception';

export const AccessiableBody = createParamDecorator(
    (field: string, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const { body } = request;
        if (body[field] && body[field] !== request.user.id) throw new NoPermissionException();
        body[field] = request.user._id;
        return body;
    },
);