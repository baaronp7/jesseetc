var http = require('http');

exports.getPosts = function (host, callback) {
    var postsJSON = null;

    var options = {
        host: host,
        path: '/wp-json/wp/v2/posts'
    };

    var req = http.get(options, function (res) {

        var bodyChunks = [];
        res.on('data', function (chunk) {
            bodyChunks.push(chunk);
        }).on('end', function () {
            postsJSON = JSON.parse(Buffer.concat(bodyChunks));
            /*var autorJSON = this.getAuthor(host, postsJSON[0].author);
            postsJSON += "," + autorJSON;*/
            callback(postsJSON);
        })

    });

    req.on('error', function (e) {
        console.log('ERROR: ' + e.message);
    });
};

exports.getPost = function (host, id, callback) {
    var postJSON = null;
    var options = {
        host: host,
        path: '/wp-json/wp/v2/posts/' + id
    };

    var req = http.get(options, function (res) {

        var bodyChunks = [];
        res.on('data', function (chunk) {
            bodyChunks.push(chunk);
        }).on('end', function () {
            postJSON = JSON.parse(Buffer.concat(bodyChunks));
            /*var autorJSON = this.getAuthor(host, postsJSON[0].author);
            postsJSON += "," + autorJSON;*/
            callback(postJSON);
        })

    });

    req.on('error', function (e) {
        console.log('ERROR: ' + e.message);
    });
};

exports.getPage = function (host, id, callback) {
    var postJSON = null;
    var options = {
        host: host,
        path: '/wp-json/wp/v2/pages/' + id
    };

    var req = http.get(options, function (res) {

        var bodyChunks = [];
        res.on('data', function (chunk) {
            bodyChunks.push(chunk);
        }).on('end', function () {
            tourJSON = JSON.parse(Buffer.concat(bodyChunks));
            callback(tourJSON);
        })

    });

    req.on('error', function (e) {
        console.log('ERROR: ' + e.message);
    });
};

exports.getAuthor = function (host, id, callback) {
    var authorJSON = null;

    var options = {
        host: host,
        path: '/wp-json/wp/v2/users/' + id
    };

    var req = http.get(options, function (res) {

        var bodyChunks = [];
        res.on('data', function (chunk) {
            bodyChunks.push(chunk);
        }).on('end', function () {
            authorJSON = Buffer.concat(bodyChunks);
            callback(authorJSON);
        })

    });

    req.on('error', function (e) {
        console.log('ERROR: ' + e.message);
    });
};

exports.getMedia = function (host, id, callback) {
    var mediaJSON = null;

    var options = {
        host: host,
        path: '/wp-json/wp/v2/media/' + id
    };

    var req = http.get(options, function (res) {

        var bodyChunks = [];
        res.on('data', function (chunk) {
            bodyChunks.push(chunk);
        }).on('end', function () {
            mediaJSON = Buffer.concat(bodyChunks);
            callback(mediaJSON);
        })

    });

    req.on('error', function (e) {
        console.log('ERROR: ' + e.message);
    });
};