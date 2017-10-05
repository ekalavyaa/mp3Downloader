var wget = require('wget-improved');
var src = 'http://nodejs.org/images/logo.svg';
var path = './mp3/';
var ProgressBar = require('progress');

module.exports = (links) => {  
	// links.forEach(downloadLink => { 
		var bar = '';
		var download = wget.download(links[0].link, `${path}${links[0].text}`);
		download.on('error', function(err) {
		    process.stdout.write('error');
		});
		download.on('start', function(fileSize) {
	    	process.stdout.write(`${links[0].text} --------> `);
		});
		download.on('end', function(output) {
		     process.stdout.write(' completed \n');
		});
	// });
};