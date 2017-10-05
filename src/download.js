var wget = require('wget-improved');
var src = 'http://nodejs.org/images/logo.svg';
var path = './mp3/';
var ProgressBar = require('progress');

module.exports = (links) => {  
		for(let i = 0 ; i < 4/*links.length */ ; i++ ) {  
			var bar = '';
			var download = wget.download(links[i].link, `${path}${links[i].text}`);
			download.on('error', function(err) {
			    process.stdout.write('error');
			});
			download.on('end', function(output) {
			     process.stdout.write(`${links[i].text} --------> completed \n`);
			});
		}
};