import { Sequelize } from 'sequelize';
import { DatabaseService } from '../../../../src/application/contracts/DatabaseService';

export class SqliteDatabaseService implements DatabaseService {
    private _connection: Sequelize;
    async init(): Promise<void> {
        try {
            this._connection = new Sequelize({
                dialect: 'sqlite',
                storage: ':memory:',
                logging: false
            });
            await this._connection.authenticate();
        } catch (error) {
            console.error(error)
        }
    }

    get connection () {
        return this._connection;
    }
} 