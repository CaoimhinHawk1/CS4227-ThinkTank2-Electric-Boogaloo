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

export const joinProject = async (projectId: string, userId: string) => {
    const response = await api.post(`/projects/${projectId}/join`, null, {
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            userId,
        },
    });
    return response.data;
};

export const leaveProject = async (projectId: string, userId: string) => {
    const response = await axios.post(`/api/projects/${projectId}/leave`, { userId });
    return response.data;
};
