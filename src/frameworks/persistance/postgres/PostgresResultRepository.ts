import { PostgresDatabaseService } from './PostgresDatabaseService';
import { ResultRepository } from "../../../application/contracts/ResultRepository";
import Result, { ResultDTO } from '../../../entities/Result.entity'
import { DataTypes } from 'sequelize';

export class PostgresResultRepository implements ResultRepository {
    
    private databaseService: PostgresDatabaseService;

    constructor(databaseService: PostgresDatabaseService) {
        this.databaseService = databaseService;
    }

    async find(query): Promise<Partial<ResultDTO> | undefined | null> {
        try {
            const { n, k, m, centers, roads } = query;
            const ResultModel = Result(this.databaseService.connection, DataTypes);
            const result = await ResultModel.findOne({ where: { n, k, m, centers, roads } });
            if (result) return result.toJSON();
            return;
        } catch (error) {
            console.log(error);
        }
    }
    async add(result): Promise<void> {
        try {
            const { n, m, k, centers, roads, result: total } = result;
            const ResultModel = Result(this.databaseService.connection, DataTypes);
            await ResultModel.create({
                n,
                m,
                k,
                centers,
                roads,
                total
            });
        } catch (error) {
            console.log(error);            
        }
    }

}