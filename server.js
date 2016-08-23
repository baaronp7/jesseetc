// server.js
// load the things we need
var express = require('express');
var partial = require('express-partial');
var less = require('less-middleware');
var app = express();

var wpAPI = require('./wpAPI');

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(less(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
app.use(partial());

app.get('/', function (req, res) {
    wpAPI.getPosts('www.jesseetcetc.com', function (postsJSON) {
        //console.log(postsJSON);
        res.render('pages/home', {
            cssFiles: ['/css/home.css'],
            postsJSON: postsJSON
        });
    });
});

app.get('/getPost', function (req, res) {
    var id = req.query.id;
    if(id != undefined) {
        wpAPI.getPost('www.jesseetcetc.com', id, function (postJSON) {
            res.render('pages/post', {
                cssFiles: ['/css/post.css'],
                postJSON: postJSON
            });                                                        
        });
    } else {
        console.log("error");
        res.send(404);
    }
});

app.get('/getMedia', function (req, res) {
    var id = req.query.id;
    if(id != undefined) {
        wpAPI.getMedia('www.jesseetcetc.com', id, function (json) {
            res.render('pages/json', {
                json: json
            });                                                                
        });
    } else {
        console.log("error");
        res.send(404);
    }
});

app.get('/listen', function (req, res) {
    res.render('pages/listen', {
        cssFiles: ['/css/listen.css']
    });
});

app.get('/tour', function (req, res) {
    res.render('pages/tour', {
        cssFiles: ['/css/tour.css']
    });
});

app.get('/contact', function (req, res) {
    res.render('pages/contact', {
        cssFiles: ['/css/contact.css']
    });
});


app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port %d in %s mode", this.address().port, app.settings.env);
});