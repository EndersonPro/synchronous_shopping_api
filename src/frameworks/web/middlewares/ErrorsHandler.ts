export default () => async (ctx, next) => {
    try {
        await next();
    } catch (err) {
        if (err.details && err.details.length) ctx.status = 400;
        else ctx.status = err.statusCode || err.status || 500;
        ctx.body = {
            errorMessage: err.message
        };
    }
}