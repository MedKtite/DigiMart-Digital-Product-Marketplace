import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from '../Auth/Register';
import LoginForm from '../Auth/Login';
import Dashboard from '../Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterForm />} />
                <PrivateRoute path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<LoginForm />} />
            </Routes>
        </Router>
    );
};

export default App;