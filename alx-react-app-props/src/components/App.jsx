 import React from 'react'; 
        import ProfilePage from './ProfilePage'; 
        import UserContext from './UserContext'; 

        function App() {
          const userData = { name: "Jane Doe", email: "Jane.Doe@example.com" };

          return (
            <UserContext.Provider value={userData}>
              <ProfilePage /> 
            </UserContext.Provider>
          );
        }

        export default App;
        