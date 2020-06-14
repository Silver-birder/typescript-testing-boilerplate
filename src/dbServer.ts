import {MongoMemoryServer} from 'mongodb-memory-server';

class DbServer {
    server!: MongoMemoryServer;

    async start() {
        this.server = new MongoMemoryServer();
        return;
    }
    async stop() {
        await this.server.stop();
        return;
    }
}

export {DbServer}