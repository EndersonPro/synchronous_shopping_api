import { PostgresResultRepository } from './../frameworks/persistance/postgres/PostgresResultRepository';
import { PostgresDatabaseService } from './../frameworks/persistance/postgres/PostgresDatabaseService';

export default (() => ({
    databaseService: new PostgresDatabaseService(),
    resultRepository: new PostgresResultRepository()
}))();