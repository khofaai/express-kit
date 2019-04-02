import Router from './lib/Router';
import { authMiddleware } from '~/app/middlewares';
import { welcomeService } from '~/app/services';

export default Router([
	{
		path: 'welcome-service',
		service: welcomeService,
		method: "POST",
		middleware: [authMiddleware],
	},
	{
		path: 'welcome-service',
		service: welcomeService,
	}
])