import { PostgresResultRepository } from './../frameworks/persistance/postgres/PostgresResultRepository';
import { PostgresDatabaseService } from './../frameworks/persistance/postgres/PostgresDatabaseService';

const databaseService = new PostgresDatabaseService();

export default (() => ({
    databaseService,
    resultRepository: new PostgresResultRepository(databaseService)
}))();