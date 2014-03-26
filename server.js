var express = require('express'),
    app = express(),
    http = require('http'),
    mysql = require("mysql"),
    api = express(),
    path = require("path"),
    application_root = __dirname;

function start() {
    
    app.listen(8888)

    console.log("Server has started.");

    
    app.configure(function() {
        app.use(express.cookieParser());
        app.use(express.session({
            secret: 'ssvshjjkliyrefdsvfngmhk3435678798874esfbfggjhmfhngwrevsdbhkulnrt3'
        }));
        //app.use(express.logger());

        app.use(express.bodyParser());
        app.use(express.methodOverride());
        //perform route lookup based on url and HTTP method
        app.use(app.router);
        app.use(express.static(__dirname + '/app/'));


    });

    
}

exports.start = start;