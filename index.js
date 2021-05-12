var express = require('express');
var serverConfig = require('./serversIpConfig');
var router = express.Router();
var app = express()
        var https = require("https");
        var fs = require('fs');
       // var grunt = require('grunt');
//add a route that delays response for 3 minutes
app.get('/test', (req, res) => {
    setTimeout(() => {
        res.send('done');
    }, 600000)
});

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({ limit: '50mb', type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: '50mb', type: 'application/x-www-form-urlencoding' })

app.use(jsonParser);
app.use(urlencodedParser);

var serverConfigDet = serverConfig.getMwServerConfig(2);
var middleWareHost = serverConfigDet.serverIP;
app.use(express.json());
app.use(router);
// var bodyParser = require('body-parser');
// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));

router.route('/*')
    .post(function (request, response) {
        // var https = require("https");
        var options = {
            host: middleWareHost,
            port: serverConfigDet.serverPort,
            path: request.path,
            method: "POST",
            headers: {
                'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36',
                'cache-control': 'no-cache',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + Buffer.from('foo:bar').toString('base64'),
            },
           // pfx: fs.readFileSync('C:\\omt\\omt-admin\\certificate.pfx'),
            //passphrase: '111',
        };
        var req = https.request(options, function (resp) {
            var responseString = "";
            resp.on("data", function (data) {
                responseString += data;
            });
            resp.on("end", function () {
                response.setHeader('Content-Type', 'application/json');
                response.setHeader('Access-Control-Allow-Origin', '*');
                response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
                response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
                response.end(responseString);
            });
        });
        req.write(JSON.stringify(request.body));
        req.end();
    })
    .options(function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.send('');
    });
	
const server = https.createServer(
   // {
		//	cert: grunt.file.read('C:\\omt\\omt-admin\\fb73f603e4be6260.crt').toString(),
		//	key: grunt.file.read('C:\\omt\\omt-admin\\omt-private.key').toString(),
		//	ca: grunt.file.read('C:\\omt\\omt-admin\\gd_bundle-g2-g1.crt').toString(),
//},
 app)
.listen(3000, function(){
	 console.log( 'Express server listening on port 3000');
})
server.timeout = 60000;
// var UglifyJS = require("uglify-js");
// var code = {
//     "ggg.js": "function add(first, second) { return first + second; }",
// };
// console.log(UglifyJS)
// var result = UglifyJS.minify(code);
// console.log(result);
console.log("UP")
