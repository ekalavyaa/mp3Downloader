let url = 'http://tamiltunes.live/all-the-songs-by-a-r-rahman-1992-2006-419-songs.html';
let links = require('./src/getLinks');
let download = require('./src/download');
links(url).then(downloadLinks => {
	return download(downloadLinks);
});