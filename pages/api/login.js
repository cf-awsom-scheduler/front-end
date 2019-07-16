const microAuthGoogle = require('microauth-google');

const options = {
  clientId:
    '578766693804-bv1bnrm58m0icsg86ur3l3k2gc16deuf.apps.googleusercontent.com',
  clientSecret: 'zgfsEGj-Z4R0yvVupzlMcDXU',
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
