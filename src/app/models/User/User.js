import Model from '../Model';
import Schema from './schema';

class User extends Model {
    constructor() {
        super(Schema);
    }
}

export default User;