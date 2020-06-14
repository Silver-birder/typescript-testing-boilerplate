import fc from 'fast-check';
import {DbServer} from "../src/dbServer";
import {DbClient} from "../src/dbClient";
import {ItemRepository} from "../src/itemRepository";

let server: any, client: any;

beforeEach(async () => {
    server = new DbServer();
    await server.start();
    const uri: string = await server.server.getUri();
    client = new DbClient();
    await client.start(uri);
});

afterEach(async () => {
    await server.stop();
    await client.stop();
});

describe('itemRepository', () => {
    it('', async () => {
        fc.assert(
            fc.property(fc.array(fc.integer()), (ns) => {
                let data = ns.map( (n) => {
                    return {name: "sample", price: n}
                });
                const itemRepository = new ItemRepository(client.client);
                itemRepository.insertItems(data).then(() => {
                });
            })
        );
    });
});