import React from 'react';
    import ProfilePage from './ProfilePage'; // Assuming ProfilePage is in the same directory

    function App() {
      const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

      return <ProfilePage userData={userData} />;
    }

    export default App;
    
        