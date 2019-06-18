import Router from './lib/Router';
import { authMiddleware } from '~/app/middlewares';
import exempleRoutes from './exemple-routes';

export default Router(
	exempleRoutes
)