import { DatabaseService } from "../../../application/contracts/DatabaseService";
import { Sequelize } from 'sequelize';
export class PostgresDatabaseService implements DatabaseService {
    private _connection: Sequelize;
    async init(): Promise<void> {
        try {
            this._connection = new Sequelize({
                host: process.env.HOST,
                port: 5432,
                database: process.env.DATABASE,
                username: process.env.USERDB,
                password: process.env.PASSWORD,
                dialect: 'postgres',
                ssl: process.env.NODE_ENV === 'development' ? false : true,
                dialectOptions: {
                    ssl: process.env.NODE_ENV === 'development' ? false : true,
                }
            });
            await this._connection.authenticate();
            console.log('Database Connected....')
        } catch (error) {
            console.error(error)
        }
    }

    get connection () {
        return this._connection;
    }
} 