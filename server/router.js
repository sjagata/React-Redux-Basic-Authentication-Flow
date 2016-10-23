const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const cors = require('cors');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', cors(), requireAuth, function(req, res) {
    // console.log(req);
      // console.log(res.req.user);
    // res.send({ message: 'Hey, ' + res.req.user.firstname + ' ' + res.req.user.lastname});
    res.send({ message: 'Hey, User added successfully! :) ' + res});
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}
