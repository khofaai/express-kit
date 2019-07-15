import { 
	createExempleService,
	deleteExempleService,
	readAllExempleService,
	readOneExempleService,
	updateExempleService,
} from '~/app/services';

export default  [
	{
		path: 'exemple',
		service: createExempleService,
		method: "POST",
	},
	{
		path: 'exemple',
		service: readAllExempleService,
		method: "GET",
	},
	{
		path: 'exemple/:id',
		service: readOneExempleService,
		method: "GET",
	},
	{
		path: 'exemple/:id',
		service: deleteExempleService,
		method: "DELETE",
	},
	{
		path: 'exemple/:id',
		service: updateExempleService,
		method: "POST",
	},
]