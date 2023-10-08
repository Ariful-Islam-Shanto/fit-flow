import React, { createContext } from 'react';

const AuthProvider = ({children}) => {
    const AuthContext = createContext(null);

    return (
        <AuthContext.Provider value={'Hello'}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;