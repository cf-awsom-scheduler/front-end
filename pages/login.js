import React from 'react';
import superagent from 'superagent';

function LoginPage(props) {
  return <>Login</>;
}

LoginPage.getInitialProps = async () => {
  const response = await superagent.get('http://localhost:3000/api/login');
  return { response };
};

export default LoginPage;
