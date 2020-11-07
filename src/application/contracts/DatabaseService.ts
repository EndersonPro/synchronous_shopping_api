export abstract class DatabaseService {
    async init() {
        throw new Error('Method not implemented');
    }

    static get connection () {
        throw new Error('Method not implemented');
    }
}