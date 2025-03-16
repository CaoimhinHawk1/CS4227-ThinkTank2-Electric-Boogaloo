import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api/projects',
});


export const fetchProjects = async () => {
    const response = await api.get('/');
    return response.data;
};

export const joinProject = async (id: string) => {
    await api.post(`/${id}/join`);
};

export const leaveProject = async (id: string) => {
    await api.post(`/${id}/leave`);
};