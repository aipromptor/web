import { observable, action, makeObservable } from 'mobx';

export class Locale {
    constructor() {
        makeObservable(this);
        this.language = "en";
    }

    @observable language: string;

    @action
    change(language: string) {
        this.language = language;
    }
}

export const localeStore = new Locale();