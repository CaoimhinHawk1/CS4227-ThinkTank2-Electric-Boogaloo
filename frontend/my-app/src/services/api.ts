import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api',
});


export const fetchProjects = async () => {
    try {
        const response = await api.get('/projects');
        return response.data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
};
export const joinProject = async (id: string) => {
    await api.post(`/${id}/join`);
};

export const leaveProject = async (id: string) => {
    await api.post(`/${id}/leave`);
};