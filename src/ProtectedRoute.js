import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            setIsAuthenticated(true);
        } catch {
            setIsAuthenticated(false);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return null; // Or a loading spinner

    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;
