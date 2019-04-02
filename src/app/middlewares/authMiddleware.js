export default (req, res, next) => {
	res.status(404).send('[authMiddleware] ERROR NO POST').end();
	return;
	next();
}