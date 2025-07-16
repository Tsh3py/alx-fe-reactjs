import React from 'react';

// Initialize a Context and export it.
// It's common practice to provide a default value, often null or an empty object,
// though for this specific use case, it's primarily the creation that matters.
const UserContext = React.createContext(null); 

export default UserContext;
