import dotenv from 'dotenv'
dotenv.config()
import Koa from 'koa';
import parameter from 'koa-parameter';
import cors from '@koa/cors'
import { apiRouter } from './frameworks/web/routes' 
import projectDependencies from './config/ProjectDependencies'
import errorHandler from './frameworks/web/middlewares/ErrorsHandler';
const app = new Koa();

const bootstrap = async () => {
    try {
        await projectDependencies.databaseService.init();
        app.use(errorHandler())
        app.use(cors());
        parameter(app);
        app.use(apiRouter(projectDependencies).routes());
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`Running in ${PORT}`);
        });
    } catch (error) {
        
    }
}
bootstrap();