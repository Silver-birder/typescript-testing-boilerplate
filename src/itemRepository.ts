class ItemRepository {
    _dbClient: any;
    constructor(dbClient: any) {
        this._dbClient = dbClient;
    }

    findItem() {
        console.log('findItem');
    }
}

export {ItemRepository}