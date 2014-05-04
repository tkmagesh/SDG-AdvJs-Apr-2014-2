var http = require("http"),
	fs = require("fs"),
	path = require("path"),
	url = require("url");

var server = http.createServer(function(req,res){
	var reqFilePath = path.join(__dirname, url.parse(req.url).pathname);
	if (fs.existsSync(reqFilePath)){
		var readStream = fs.createReadStream(reqFilePath);
		readStream.pipe(res);	
	} else {
		res.status = 404;
		res.end();
	}
});
server.listen(9090);