import Application from "koa";
import { ResultRepository } from "../application/contracts/ResultRepository";
import getMinimumTime from '../application/use_cases/SynchronousShopping/GetMinimumTime';

export const SynchronousShoppingController = (resultRepository: ResultRepository) => {

    const getMinimumTimeSynchronousShopping = async (ctx) => {
        let { parameters,shoping_centers, roads } = ctx.request.body;
        parameters = parameters.split(',').map(p => parseInt(p, 10));
        shoping_centers = shoping_centers.split('-').map(s => s.replace(',',' ')).map(c => c.split(' ').map(n => parseInt(n, 10)));
        roads = roads.split('-').map(r => r.split(',').map(n => parseInt(n, 10)));
        const minimum_time = await getMinimumTime(resultRepository, {
            n: parameters[0],
            k: parameters[2],
            centers: shoping_centers,
            roads
        });
        ctx.body = { minimum_time }
    }

    return {
        getMinimumTimeSynchronousShopping
    }
}