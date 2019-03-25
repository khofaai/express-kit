import { env } from '@/config';
import Mongoose from 'mongoose';

class DB {

    constructor(options = { useNewUrlParser: true }) {
        this.db = null;
        this.setConfig(options);
        this.connect();
    }
    
    getConfig() {
        return this.dbConfig;
    }

    setConfig(options) {
        this.dbConfig = Object.assign({
            port: 27017,
            user: 'root',
            password: '',
            database: 'test',
            host: 'localhost',
            options:  { useNewUrlParser: true }
        },{
            port: env.DB_PORT,
            user: env.DB_USERNAME,
            password: env.DB_PASSWORD,
            database: env.DB_NAME,
            host: env.DB_HOSTNAME,
            options
        });
    }

    async connect() {
        let cnf = this.dbConfig;
        //${cnf.user}:${cnf.password}@
        this.db = Mongoose.connect(`mongodb://${cnf.host}:${cnf.port}/${cnf.database}`,cnf.options)
    }
}

export default DB;