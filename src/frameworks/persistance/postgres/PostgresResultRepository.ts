import { ResultRepository } from "../../../application/contracts/ResultRepository";

export class PostgresResultRepository implements ResultRepository {

    async find(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async add(result): Promise<void> {
        throw new Error("Method not implemented.");
    }

}