

var fs = require('fs')
var path = require('path')

// var callback = function(error, files) {
// 	if (error) {
// 		console.log('Uh-oh! Something went wrong!')
// 		return;
// 	} else {
// 		for (var key in files) {
// 	  		//strip file name down to extension name
// 			var fileExt = path.extname(files[key]).replace('.', '')

// 			//print out files that match the filter
// 			var filteredList = [];

// 			if (fileExt === filter) {
// 				console.log(files[key])
// 			}
// 	  	};
// 	}
// }

// fs.readdir(fileList, function(error, files) {
//   	for (var key in files) {
//   		//strip file name down to extension name
// 		var fileExt = path.extname(files[key]).replace('.', '')

// 		//print out files that match the filter
// 		var filteredList = [];

// 		if (fileExt === filter) {
// 			filteredList.push(files[key])
// 		}

//   	};

//   return filteredList;
// });

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


























