import { action, observable } from "mobx";
import { v4 } from "uuid";

interface IItemOptions {
    id?: string;
    name: string;
    parentId?: string | null;
}

export class Item {
    @observable
    id: string;

    @observable
    name: string;

    @observable
    parentId: string | null = null;

    constructor(options: IItemOptions) {
        this.name = options.name;
        this.id = options.id ?? v4();
        this.parentId = options.parentId ?? null;
    }

    @action
    setParentId(id: string) {
        this.parentId = id;
    }
}
