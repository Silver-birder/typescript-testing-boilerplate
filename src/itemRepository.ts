const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'myproject';

class ItemRepository {
    findItem(price: number) {
        const client  = new MongoClient(url);
        client.connect(function (err: any) {
            // @ts-ignore
            const db = client.db(dbName);
            client.close();
        });
    }
}

export {ItemRepository}