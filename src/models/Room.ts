import { observable } from "mobx";
export class Room {
    @observable
    id: string;

    @observable
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
