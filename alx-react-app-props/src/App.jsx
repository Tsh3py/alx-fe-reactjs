import React from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Import UserContext

function App() {
  const userData = { name: "Tshepi Mohitshane", email: "tshepi.mohitshane@example.com" };

  return (
    // Wrap ProfilePage with UserContext.Provider and pass userData as the value
    <UserContext.Provider value={userData}>
      <ProfilePage /> {/* ProfilePage no longer needs userData prop */}
    </UserContext.Provider>
  );
}

export default App;
