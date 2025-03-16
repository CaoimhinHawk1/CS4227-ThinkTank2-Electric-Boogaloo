import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProjects, joinProject, leaveProject } from '../../services/api';
import { Project } from '../../models/project';

interface ProjectsState {
    projects: Project[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ProjectsState = {
    projects: [],
    status: 'idle',
    error: null,
};

// Async thunk to fetch projects
export const fetchProjectsAsync = createAsyncThunk(
    'projects/fetchProjects',
    async () => {
        const response = await fetchProjects();
        return response;
    }
);

// Async thunk to join a project
export const joinProjectAsync = createAsyncThunk(
    'projects/joinProject',
    async (id: string) => {
        await joinProject(id);
        return id;
    }
);

// Async thunk to leave a project
export const leaveProjectAsync = createAsyncThunk(
    'projects/leaveProject',
    async (id: string) => {
        await leaveProject(id);
        return id;
    }
);

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjectsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProjectsAsync.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.projects = action.payload;
            })
            .addCase(fetchProjectsAsync.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch projects';
            })
            .addCase(joinProjectAsync.fulfilled, (state, action) => {
                const project = state.projects.find((p) => p.id === action.payload);
                if (project) {
                    project.participants++;
                }
            })
            .addCase(leaveProjectAsync.fulfilled, (state, action) => {
                const project = state.projects.find((p) => p.id === action.payload);
                if (project && project.participants > 0) {
                    project.participants--;
                }
            });
    },
});

export default projectsSlice.reducer;