 import React from 'react';
    import UserInfo from './UserInfo'; // Assuming UserInfo is in the same directory

    function ProfilePage({ userData }) {
      return <UserInfo userData={userData} />;
    }

    export default ProfilePage;