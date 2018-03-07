var express = require('express');
var router = express.Router();
var OAuth = require('oauth');
require('dotenv').config()

/* GET users listing. */
router.get('/', function(req, res, next) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.KEY,
      process.env.SECRET,
      'fCllp3oO961G1D4bUdyjqiNuT',
      'X1RUxKZXoFcobXZ9SYOk9hyGNuPivexA3S8sXcxtlGm7Ok9XDl',
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=MamenGuwe',
      '2941858074-yyk7efmWebuLdI4HzPj45ruK62Nj79UuaU7dqeJ', //test user token
      'cLHzFPiEGAgf3WymlTB4ff68HwZyJRT7Qt3kXN2qdbMnU', //test user secret
      function (e, data){
        res.status(200).send(data)
      });
});

router.post('/',function(req,res,next){
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.KEY,
      process.env.SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.post(
      `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.pesan}`,
      '2941858074-yyk7efmWebuLdI4HzPj45ruK62Nj79UuaU7dqeJ', //test user token
      'cLHzFPiEGAgf3WymlTB4ff68HwZyJRT7Qt3kXN2qdbMnU',
      req.body.pesan,
      'pesan',
      function (e, data){
        res.status(200).send(data)
      });
})

router.get('/trends', function(req, res, next) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.KEY,
      process.env.SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
      'https://api.twitter.com/1.1/trends/place.json?id=1',
      '2941858074-yyk7efmWebuLdI4HzPj45ruK62Nj79UuaU7dqeJ', //test user token
      'cLHzFPiEGAgf3WymlTB4ff68HwZyJRT7Qt3kXN2qdbMnU', //test user secret
      function (e, data){
        res.status(200).send(data)
      });
});

  router.get('/search', function(req, res, next) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.KEY,
      process.env.SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(//?tweet=hacktiv8
      `https://api.twitter.com/1.1/search/tweets.json?q=${req.query.tweet}`,
      '2941858074-yyk7efmWebuLdI4HzPj45ruK62Nj79UuaU7dqeJ', //test user token
      'cLHzFPiEGAgf3WymlTB4ff68HwZyJRT7Qt3kXN2qdbMnU',
      function (e, data){
        res.status(200).send(data)
      });
  // res.send(req.body.search)
});

module.exports = router;
