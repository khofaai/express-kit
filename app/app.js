import express from 'express';
import Container from './vendor/container';

const App = express();

export default new Container(App);