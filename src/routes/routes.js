import Router from './lib/Router';
import { authMiddleware } from '~/app/middlewares';
import { welcomeService } from '~/app/services';

export default [
	Router.middleware([authMiddleware]).registerRoute({
		'welcome-service': welcomeService
	})
]