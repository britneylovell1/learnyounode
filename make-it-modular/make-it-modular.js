var mymodule = require('./mymodule')

var fileList = process.argv[2]
var filter = process.argv[3]
var callback = function(error, data) {
	if (error) {
		console.log('Uh-oh! Something went wrong!')
	} else {
		for (var i = 0; i < data.length; i++) {
			console.log(data[i])
		}
	}
}

mymodule(fileList, filter, callback)