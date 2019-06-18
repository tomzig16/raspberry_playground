var http = require('http');

http.createServer((req, res) => {
	if(req.method == "GET" && req.url == "/thermdata") {
		let body = [];
		req.on("data", (chunk) => {
			body.push(chunk);
		}).on("end", () => {
			res.end(Buffer.concat(body).toString());
		});
	}
	else {
		response.statusCode = 404;
		response.end();
	}
}).listen(8080);

