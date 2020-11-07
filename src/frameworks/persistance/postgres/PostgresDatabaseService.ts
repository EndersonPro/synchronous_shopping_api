import { DatabaseService } from "../../../application/contracts/DatabaseService";
import { Sequelize } from 'sequelize';
export class PostgresDatabaseService implements DatabaseService {
    async init(): Promise<void> {
        try {
            const sequelize = new Sequelize({
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
            await sequelize.authenticate();
            console.log('Autenticado....')
        } catch (error) {
            console.error(error)
        }
    }
} 