// UserProfile.jsx (Class Component)
import React from 'react';
import UserContext from './UserContext';

class UserProfile extends React.Component {
  static contextType = UserContext;

  render() {
    const userData = this.context;
    return (
      <div>
        <h2>User Profile</h2>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div>
    );
  }
}

export default UserProfile;