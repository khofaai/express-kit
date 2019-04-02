import DB from '~/vendor/orm/db';
import { Schema, model } from 'mongoose';
class Model {
    constructor(modelSchema) {
        new DB();
        this.init(modelSchema);
    }

    async init(modelSchema) {
        this.name = this.constructor.name;
        this._instance = model(this.name, new Schema(modelSchema));
    }

    getName() {
        return this.name;
    }
    
    getInstance() {
        return this._instance;
    }
}

export default Model;