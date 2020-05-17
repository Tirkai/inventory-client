import { ItemsStore } from "./ItemsStore";
import { SearchStore } from "./SearchStore";

export class AppStore {
    items: ItemsStore;
    search: SearchStore;
    constructor() {
        this.items = new ItemsStore(this);
        this.search = new SearchStore(this);
    }
}
