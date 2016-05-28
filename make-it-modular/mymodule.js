

var fs = require('fs')
var path = require('path')

module.exports = function(fileList, filter, callback) {

	fs.readdir(fileList, function(error, files) {
		if (error) {
			return callback(error)
		} 

		var filteredList = [];

	  	for (var key in files) {
	  		//strip file name down to extension name
			var fileExt = path.extname(files[key]).replace('.', '')

			//print out files that match the filter
			if (fileExt === filter) {
				filteredList.push(files[key])
			}

	  	};

  		callback(null, filteredList)
	});

}


























