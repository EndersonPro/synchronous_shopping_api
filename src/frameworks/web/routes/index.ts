import Routes from '@koa/router'
import { synchronousShoppingRouter } from './SynchronousShoppingRoutes';
import { AuthValidate } from './../middlewares/Auth';

export const apiRouter = (dependencies) => {
    const routes = new Routes({ prefix: '/api/v1' })
    routes.use(AuthValidate)
    const ssRouter = synchronousShoppingRouter(dependencies);
    routes.use(ssRouter.routes());
    return routes;
}