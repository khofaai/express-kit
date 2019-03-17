import Database from './database';
import dotenv from 'dotenv';
dotenv.config();

const Config = {
    PORT: process.env.PORT
}

export {
	Config,
	Database
}