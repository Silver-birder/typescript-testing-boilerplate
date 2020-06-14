import {ItemRepository} from "./itemRepository";

const item = new ItemRepository();
console.log(item.findItem(1));