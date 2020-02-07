// import DB from '~/vendor/orm/db';
import { Schema, model } from 'mongoose';
class Model {
    constructor(modelSchema) {
        // new DB();
        this.init(modelSchema);
        // DB.connect();
    }

    async init(modelSchema) {
        this.name = this.constructor.name;
        this.modelSchema = modelSchema;
    }

    getName() {
        return this.name;
    }
    
    getInstance() {
        try {
            return model(this.name);
        } catch(e) {
            return model(this.name, new Schema(this.modelSchema));;
        }
    }
}

export default Model;
