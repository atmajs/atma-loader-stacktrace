var File,
	atma = global;
if (atma.io && atma.io.File) 
	File = atma.io.File;

if (File == null) {
	atma = global.atma;
	if (atma && atma.io) 
		File = atma.io.File;
}
if (File == null) 
	File = require('atma-io').File;

/* { handleUncaughtExceptions } */
module.exports = function(options){
	var SourceMap = require('source-map-support');
	var config = {
		retrieveSourceMap: function(path){
			if (io.File.exists(path + '.map')){
				var map = io.File.read(path + '.map');
				if (!map) 
					return null;
				try {
					map = JSON.parse(map);
				} catch(error){
					console.error('Invalid SourceMap Json', path + '.map');
					return null;
				}
				path = path.replace(/\\/g, '/');
				map.sourceRoot = path.substring(0, path.lastIndexOf('/'));
				return {
					map: map
				}
			}
			return null;
		}
	};
	for (var key in options){
		config[key] = options[key];
	}
	SourceMap.install(config);
};