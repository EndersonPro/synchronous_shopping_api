import { ResultDTO } from "../../entities/Result.entity";

export abstract class ResultRepository {
    async add (result): Promise<any> {
        throw new Error('Method not implemented');
    }

    async find (query: any): Promise<Partial<ResultDTO> | undefined | null> {
        throw new Error('Method not implemented');
    }
}