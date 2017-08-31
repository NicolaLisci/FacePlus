var qs = require("querystring");
var http = require("http");

function FacePlus(req, res)
{

var options =
{
  "method": "POST",
  "hostname": "api-us.faceplusplus.com",
  "port": null,
  "path": "/facepp/v3/detect",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "postman-token": "8a4f9984-56ea-08db-37f5-c5cf045ff8b8"
  }
};

var reqFP = http.request(options, function (resFP) {
  var chunks = [];

  resFP.on("data", function (chunk) {
    chunks.push(chunk);
  });

  resFP.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(body.toString());
  });
});

reqFP.write(qs.stringify({ api_key: '3Q1uXdQkAG1WW6HvX0yW4KohqfbAGA-j',
  api_secret: 'iMmoZS541ANw0LAhtq_eUgMf2wjSdHrn',
  image_url: 'http://www.toscanapetfriendly.it/wp-content/uploads/2015/05/Toscanapetfriendly-I-cani-distinguono-i-visi-felici-da-quelli-arrabbiati-800x459.jpg',
  return_attributes: 'emotion' }));
reqFP.end();
}

var server = http.createServer(function (req, res) {
    FacePlus(req, res);
})
 
server.listen(2000, '127.0.0.1');
 
console.log('Sto avviando FacePlus... http://127.0.0.1:2000/');
















