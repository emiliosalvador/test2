let AWS = require('aws-sdk');
const s3 = new AWS.S3();
exports.handler = function (event, context, callback) {
	s3.getBucketLocation({
		'Bucket': "cf-templates-14c2ncnr66h8p-us-east-1"
	}).promise()
		.then(data => {
			console.log(data);           // successful response
			/*
			data = {
				LocationConstraint: "us-west-2"
			}
			*/
		})
		.catch(err => {
			console.log(err, err.stack); // an error occurred
		});


	callback(null, 'Successfully executed');
}