import React from 'react';

function LoginPage(props) {
  return <>{console.log(props)}</>;
}

Requests.getInitialProps = async () => {
  const response = await fetch('http://localhost:3000/api/login');
  const requests = await response.json();

  return { requests };
};

export default App;
