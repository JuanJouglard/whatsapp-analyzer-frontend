
export class Interact {
    _instance: Interact

    constructor() {

    }

    static getInstance() {
        if !(this._instance) {
            this._instance = new Interact()
        }
        return this._instance
    }
}
