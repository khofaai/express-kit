import Model from '../Model';

class User extends Model {
    constructor() {
        super({
            name: String,
            email: {
                type: String,
                required: true
            },
            enabled: {
                type: Boolean,
                default: false
            },
            password: String
        });
    }
}

export default User;