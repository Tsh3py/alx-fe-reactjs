import React from 'react';
import UserContext from './UserContext';

class UserProfile extends React.Component {
  render() {
    return (
      <UserContext.Consumer>
        {userData => (
          <div>
            <h2>User Profile</h2>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default UserProfile;