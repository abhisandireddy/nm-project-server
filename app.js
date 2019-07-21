const request = require('request');
var http = require('http');
var requestURL = "asdsd";
var url = require('url');


const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    var url = req.url; 
    var breedName = (url.split("/"))[2]; 
    console.log(breedName); 
    if (url === "/api") {
        res.write("Hello there!");
        res.end();
    }
 
    
    request('https://dog.ceo/api/breed/' + breedName + '/images', function (error, response, body) {
        console.log('statusCode:', response && response.statusCode);
        var requestURL = body;
        res.write(JSON.stringify(requestURL));
        res.end();
    });

}
);

server.listen(3001);

console.log('Listening on port 3001');


