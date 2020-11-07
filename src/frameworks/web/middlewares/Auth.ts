export const AuthValidate = async (ctx, next) => {
    const { username, checksum } = ctx.query;
    if (username === 'taximo_api_user' && checksum === 'cd7ced88fb72ee862940d5664555251f9ba044d8478a71a7b70b04bd708c2796') {
        await next();
    } else {
        ctx.throw('Unauthorized', 401);
    }
}