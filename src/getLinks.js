let request = require('request');
let cheerio = require('cheerio');
let Promise = require('bluebird');
let searchRegex= /.mp3$/gm;
module.exports = (url) => {
	let downloadLinks = [];
	return new Promise((success, reject) => {
		request(url, (err, resp, body) => {
		  $ = cheerio.load(body);
		  links = $('a'); //jquery get all hyperlinks
		  $(links).each((i, link) => {
		    if(searchRegex.test($(link).attr('href'))) {
		    	downloadLinks.push({
		    		link:$(link).attr('href'),
		    		text:$(link).text()
		    	});
		    }
		  });
		  success(downloadLinks);
		});
	});
};
