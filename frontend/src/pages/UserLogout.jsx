import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            const token = localStorage.getItem('token');

            // If token is not available, navigate directly to login
            if (!token) {
                navigate('/login');
                return;
            }

            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/logout`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.status === 200) {
                    // Remove token from localStorage and redirect to login
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Logout failed:', error);
                // Optionally handle errors, e.g., show a message or log the user out regardless
                localStorage.removeItem('token');
                navigate('/login');
            }
        };

        logout();
    }, [navigate]);

    return <div>Logging you out...</div>;
};

export default UserLogout;
