import Router from '@koa/router'
import { argv } from 'process';
import { SynchronousShoppingController } from '../../../controllers/SynchronousShoppingController';

export const synchronousShoppingRouter = ({ resultRepository }) => {
    const router = new Router()
    const synchronousShopping = SynchronousShoppingController(resultRepository);
    router.get('/synchronous_shopping', synchronousShopping.getMinimumTimeSynchronousShopping);
    return router;
}