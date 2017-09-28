// Allow to switch between dev & prod config
module.exports = function(env) {
	return require(`./webpack.${env}.js`);
};
