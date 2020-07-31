# Express JS - starter KIT

MicroService Starter KIT built with Express JS 

## Installation

You can simply  :
```bash
git clone https://github.com/khofaai/express-kit
```
Then go to project folder : 
```bash
cd express-kit
``` 
Then run 
```bash
npm install
```

After the installation finished, you can start `express js` server by running :
```bash
npm start
```
hope you'll build awesome things :D

## Features

### Fast Import Path

- **`@`** refers to `ROOT_FOLDER/`
- **`~`** refers to `ROOT_FOLDER/src/`

You can import from `./src/app/models/Exemple` like : 
```javascript
import Exemple from '~/app/models/Exemple';
```
The same if you need to import from root folder :
```javascript
import * as Config from '@/config';
```

### ES6 impot / export

It has `import` and `export` syntax out-of-box with the help of [`esm`](https://www.npmjs.com/package/esm)

## CLI Builder

### Generate Service / Controller / Model

```bash
npm run generate
Generate : , service, controller, model ?
_
```
You can write which one you want to generate if in you case is `model`
```bash
Generate : , service, controller, model ?
model
model name ?
_
```
Then you can name your `model`, unlike `service` and `controller` the package add to chosen name `Service` or `Controller`

### MicroServices
_NOT YET_ <br/>
_A CLI to Generate MicroServices with the following architecture :_
```
── src
	└── app
	    ├── services
	    │    └──[ServiceName]
	    │       ├── [ServiceName].js
	    │       ├── README.md
	    │       └── package.json
```

### Database

You can config your database settings in ~/config/util/Env

### CRUD Exemple

You can find an already existing CRUD MicroServices setup for the 'Exemple' Model in ~/src/app/services/Exemple

### Routing

You can find a base CRUD routing for the 'Exemple' MicroServices in ~/src/routes/exemple-routes

### Middleware

```javascript
export default (req, res, next) => {
	// logic
	next();
}
```

### Database/Migration/Seeds

_NOT YET_


