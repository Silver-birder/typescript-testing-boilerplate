import {Schema} from "mongoose";

const Item = new Schema({
    name: {type: String},
    price: {type: Number},
});

class ItemRepository {
    _dbClient: any;

    constructor(dbClient: any) {
        this._dbClient = dbClient;
    }

    async insertItems(items: any[]) {
        const itemModel = this._dbClient.model('Item', Item);
        if (items.length === 0) {
            return;
        }
        await itemModel.collection.insertMany(items);
    }

    async findItemByPriceGreaterThan(gte: number): Promise<any[]> {
        const itemModel = this._dbClient.model('Item', Item);
        const data = await itemModel.find({price: {$gte: gte}});
        return data;
    }
}

export {ItemRepository}