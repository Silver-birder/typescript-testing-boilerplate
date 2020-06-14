import {DbServer} from "./dbServer";
import {DbClient} from "./dbClient";
import {ItemRepository} from "./itemRepository";

(async () => {
    const server = new DbServer();
    await server.start();
    const uri: string = await server.server.getUri();

    const client = new DbClient();
    await client.start(uri);

    const itemRepository = new ItemRepository(client.client);
    await itemRepository.insertItems([]);
    await itemRepository.findItem();

    await client.stop();
    await server.stop();
})();
