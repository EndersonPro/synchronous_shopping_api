import Router from '@koa/router'
import { SynchronousShoppingController } from '../../../controllers/SynchronousShoppingController';
import validateField from '../middlewares/ValidateFields';

export const synchronousShoppingRouter = ({ resultRepository }) => {
    const router = new Router()
    const synchronousShopping = SynchronousShoppingController(resultRepository);
    router.post('/synchronous_shopping', validateField, synchronousShopping.getMinimumTimeSynchronousShopping);
    return router;
}