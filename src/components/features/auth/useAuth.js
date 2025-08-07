import { useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');

    const login = (username, password) => {
        setError('');

        if (username.trim() === '' || password.trim() === '') {
            setError('Please fill in all fields.');
            return false;
        }

        if (username === 'user' && password === '123') {
            setUser({ username });
            return true;
        } else {
            setError('User or Password invalid');
            return false;
        }
    };

    const logout = () => {
        setUser(null);
    };

    return { user, login, logout, error };
};

export default useAuth;
