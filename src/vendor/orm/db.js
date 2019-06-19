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
            database: 'exemple-express-kit',
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
        let { host, port, database, options } = this.dbConfig;
        //${cnf.user}:${cnf.password}@
        this.db = Mongoose.connect(`mongodb://${host}:${port}/${database}`,options)
    }
}

export default new DB;