const microAuthGoogle = require('microauth-google');

const options = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackUrl: 'http://localhost:3000/login',
  path: '/api/login',
  scope: 'https://www.googleapis.com/auth/plus.me'
};

const googleAuth = microAuthGoogle(options);

export default googleAuth(async (req, res, auth) => {
  if (!auth) {
    req.body('not found');
  }

  if (auth.err) {
    // Error handler
    req.body('access denied');
  }

  req.json(auth);
});
