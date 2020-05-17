import Axios from "axios";
import { action, observable } from "mobx";
import { Item } from "models/Item";
import { AppStore } from "./AppStore";
export class ItemsStore {
    private store: AppStore;
    constructor(store: AppStore) {
        this.store = store;
    }

    @observable
    items: Item[] = [];

    @observable
    currentItem: Item | null = null;

    @action
    async fetchItems(id?: string) {
        const parentId = id ?? "null";

        const response = await Axios.get<Item[]>(
            `http://${window.location.hostname}:7000/api/items?parentId=${parentId}`,
        );
        this.items = response.data;

        if (id) {
            const responseCurrentItem = await Axios.get<Item>(
                `http://${window.location.hostname}:7000/api/items/${id}`,
            );
            this.currentItem = responseCurrentItem.data;
        } else this.currentItem = null;
    }

    @action
    async createItem(item: Item) {
        const response = await Axios.post<Item>(
            `http://${window.location.hostname}:7000/api/items`,
            { item },
        );
        console.log(response.data);
        this.items.push(response.data);
    }
}
