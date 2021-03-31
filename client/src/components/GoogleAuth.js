import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '443193065634-asqsk8lkqvpvodk3rio1foemm1nlkm8j.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }

  render () {
    return (
      <div>
        Google Auth
      </div>
    );
  }
}

export default GoogleAuth;
