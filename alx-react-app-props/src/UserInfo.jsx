 import React from 'react';
import UserDetails from './UserDetails';

function UserInfo() { // Removed { userData } from props
  return <UserDetails />; // UserDetails no longer needs userData prop
}

export default UserInfo;

    