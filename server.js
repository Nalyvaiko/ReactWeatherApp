var express = require('express');

// Create app
var app = express();

// If running from Heroku - use env.port, else 3000
const PORT = process.env.PORT || 3000;

//express middleware, check if traffic http || https - redirect
app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'http') {
        next();
    } else {
        res.redirect('http://' + req.hostname + req.url);
    }
});

// which folder to serve
app.use(express.static('public'));

app.listen(PORT, function() {
    console.log('Express server is up on port ' + PORT);
})
