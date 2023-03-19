import { observable, action, makeObservable } from 'mobx';
import { PromptScopeEntity } from '../entity'
import {} from '../repository'

export class PromptScopeNav {
    constructor() {
        makeObservable(this);
        this.loading = true;
        this.scopes = [];
    }

    @observable loading: boolean;

    @action
    inited() {
        this.loading = false;
    }

    @observable scopes: PromptScopeEntity[];

    @action
    async loadScopes(newScopes: PromptScopeEntity[]) {
        this.scopes = newScopes;
    }
}

export const promptScopeStore = new PromptScopeNav();