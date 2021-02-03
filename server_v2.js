const http = require('http');
const axios = require('axios')

//handle server requests and send response
const server = http.createServer((req, res) => {
    if (req.url.includes('/artist/')) {
        axios.get('https://musicbrainz.org/ws/2' + req.url+'/fmt=json', function (error, response, body){
            if (!error && response.statusCode == 200) {
                res.send(body)
            } else {
                res.send(error);
            }
        })
    }
});

// Start the server on port 3000
server.listen(3000, () => console.log('node server running on port 3000'));
