import React from 'react';
import UserInfo from './UserInfo';

function ProfilePage() { // Removed { userData } from props
  return <UserInfo />; // UserInfo no longer needs userData prop
}

export default ProfilePage;
