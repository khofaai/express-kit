# Express JS - starter KIT - Innoveos

MicroService Started KIT builded with Express JS for [@innoveos](https://github.com/innoveos)

## Features

### Fast Import Path

- **`@`** refer to `ROOT_FOLDER/`
- **`~`** refer to `ROOT_FOLDER/src/`

You can import from `./src/app/models/Exemple` like : 
```javascript
import Exemple from '~/app/models/Exemple';
```
The same if you need to import from root folder :
```javascript
import * as Config from '@/config';
```

### ES6 impot / export

It has `import` and `export` synthax out-of-box by the help of [`esm`](https://www.npmjs.com/package/esm)

## CLI Builder

### Generate Service / Controller / Model

```bash
npm run generate
Generate : , service, controller, model ?
_
```
you can write which one you want to generate if in you case is `model`
```bash
Generate : , service, controller, model ?
model
model name ?
_
```
then you can name your `model`, unlike `service` and `controller` the package add to choosen name `Service` or `Controller`

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


