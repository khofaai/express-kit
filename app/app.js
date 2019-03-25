import express from 'express';
import Container from './vendor/container';
import http from 'http';

const App = express();

export default new Container(App, http.createServer(App));
