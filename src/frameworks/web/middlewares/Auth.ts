import crypto from 'crypto';

export const AuthValidate = async (ctx, next) => {
    const { username, checksum, ...body } = ctx.request.body;
    ctx.request.body = body;
    const hash = crypto.createHash('SHA256').update(username).digest('hex');
    if (username === 'taximo_api_user' && hash === checksum) {
        await next();
    } else {
        ctx.throw('Unauthorized', 401);
    }
}