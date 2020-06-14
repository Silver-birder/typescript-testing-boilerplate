import mongoose from 'mongoose';

mongoose.Promise = Promise;

class DbClient {
    client: any;

    constructor() {
        this.client = mongoose;
    }

    async start(mongoUri: string) {
        return new Promise((resolve, reject) => {
            const mongooseOpts = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            };
            mongoose.connect(mongoUri, mongooseOpts);
            mongoose.connection.on('error', (e) => {
                reject(e);
            });

            mongoose.connection.once('open', () => {
                resolve(`MongoDB successfully connected to ${mongoUri}`);
            });
        })
    }

    async stop() {
        await this.client.disconnect();
        return;
    }
}

export {DbClient}