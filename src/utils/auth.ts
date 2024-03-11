import axios from 'axios';

export const refresAccessToken = async () => {
    try {
        const resp = await axios.get(`${import.meta.env.VITE_API_URL}/auth/refresh`);
        localStorage.setItem('access_token', resp.data.access_token);
        localStorage.setItem('refresh_token', resp.data.refresh_token);
    } catch (e) {
        console.log('Login error');
    }
};

export const setAccessToken = async (token: string) => {
    localStorage.setItem('access_token', token);
};

export const getAccessToken = () => {
    return '132';
    return localStorage.getItem('access_token') ?? '';
};
