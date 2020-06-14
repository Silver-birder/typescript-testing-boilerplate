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
        const model = new itemModel();
        model.name = "sample";
        await model.save();
    }

    async findItem() {
        const itemModel = this._dbClient.model('Item', Item);
        const a = await itemModel.find({});
        console.log(a);
    }
}

export {ItemRepository}