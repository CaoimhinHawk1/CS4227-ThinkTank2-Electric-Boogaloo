import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
});

export const fetchHello = async () => {
    const response = await api.get('/hello');
    return response.data;
};