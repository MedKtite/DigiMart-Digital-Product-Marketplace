// PrivateRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

interface PrivateRouteProps {
    element: React.ReactElement;
    path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
    const { isAuthenticated } = useAuth();

    return (
        <Route
            path={path}
            element={isAuthenticated ? element : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;