export default (req, res, next) => {
	console.log('authMiddleware');
	// res.send(404, 'ERROR');
	next();
}