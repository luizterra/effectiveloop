import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';
import { useLocation } from 'react-router-dom';

const CustomAuthenticator = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true);
        } catch {
            setIsAuthenticated(false);
        }
    };

    const handleGoogleSignIn = () => {
        Auth.federatedSignIn({ provider: 'Google' });
    };

    const handleSignOut = async () => {
        console.log('Signing out...');
        await Auth.signOut();
        setIsAuthenticated(false);
        setTimeout(() => {
            console.log('Redirecting to /signed-out');
            window.location.href = '/signed-out';
        }, 1000); // Add a delay to ensure sign-out completes
    };

    if (location.pathname === '/signed-out') {
        return children; // Do not show buttons on the signed-out page
    }

    return (
        <div>
            {!isAuthenticated && location.pathname !== '/signed-out' && (
                <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            )}
            {isAuthenticated && (
                <button onClick={handleSignOut}>Sign out</button>
            )}
            {children}
        </div>
    );
};

export default CustomAuthenticator;
