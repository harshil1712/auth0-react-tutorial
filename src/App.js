import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import Nav from './components/Nav';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN}
      clientId={process.env.REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Nav />
      <UserInfo />
    </Auth0Provider>
  );
}

export default App;
