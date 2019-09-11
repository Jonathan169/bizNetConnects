const express   =   require("express");
const passport = require('passport');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const formData = require('express-form-data');
const bodyParser = require('body-parser');
//initalize express
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
//set port
const port = process.env.PORT || 3001;
//connecting socket
server.listen(80);
// WARNING: app.listen(80) will NOT work here!
// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// });
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});
//middleware for api's and for compatibilty with React framework
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(formData.parse());
app.use(bodyParser.json());
//middleware for user authentication, using passport library
app.use(cookieParser());
app.use(session({ secret: "bizz",
saveUninitialized:false,
resave:false }));
app.use(passport.initialize());
app.use(passport.session());
//linking routes
const passportRoute = require("./routes/auth")(passport);
require("./passport")(passport);
require('./routes')
app.use('/auth', passportRoute);
//serving static files
if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"))
}
//serving sites
// app.get('/',function(req,res){
//     res.send("./client/build")
// });
//server listenig and db connection
var db = require("./models")
db.sequelize.sync().then(function(){
    app.listen(port, function (){
        console.log('listening on localhost:'+ port)
    })
})
require('./services')