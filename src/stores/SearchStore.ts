import Axios from "axios";
import { action, observable } from "mobx";
import { Item } from "models/Item";
import { AppStore } from "./AppStore";

export class SearchStore {
    store: AppStore;
    constructor(store: AppStore) {
        this.store = store;
    }

    @observable
    searchValue: string = "";

    @observable
    result: Item[] = [];

    @action
    setSearchValue(value: string) {
        this.searchValue = value;
    }

    @action
    async fetchSearchResults() {
        const url = new URL(
            `http://${window.location.hostname}:7000/api/items`,
        );
        url.searchParams.set("search", this.searchValue);
        const response = await Axios.get<Item[]>(url.toString());
        this.result = response.data;
    }
}
