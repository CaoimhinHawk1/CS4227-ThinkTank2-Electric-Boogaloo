import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchProjects, joinProject, leaveProject } from "../../services/api"
import type { Project } from "../../models/project"

interface ProjectsState {
  projects: Project[]
  status: "idle" | "loading" | "succeeded" | "failed"
  error: string | null
}

const initialState: ProjectsState = {
  projects: [],
  status: "idle",
  error: null,
}

// Async thunk to fetch projects
export const fetchProjectsAsync = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
      return await fetchProjects()
  },
)

// Async thunk to join a project
export const joinProjectAsync = createAsyncThunk(
  "projects/join",
    async ({ projectId, userId }: { projectId: string; userId: string }) => {
      const response = await joinProject(projectId, userId);
      return response.data;
  },
)

// Async thunk to leave a project
export const leaveProjectAsync = createAsyncThunk(
    "projects/leave",
    async ({ projectId, userId }: { projectId: string; userId: string }) => {
        const response = await leaveProject(projectId, userId); // Pass both projectId and userId to the API
        return { projectId, userId }; // Return both projectId and userId for state updates
    },
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchProjectsAsync.pending, state => {
                state.status = "loading";
            })
            .addCase(fetchProjectsAsync.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.projects = action.payload;
            })
            .addCase(fetchProjectsAsync.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message || "Failed to fetch projects";
            })
            .addCase(joinProjectAsync.fulfilled, (state, action) => {
                const project = state.projects.find((p) => p.id === action.payload.projectId);
                if (project) {
                    project.participants++;
                }
            })
            .addCase(leaveProjectAsync.fulfilled, (state, action) => {
                const project = state.projects.find((p) => p.id === action.payload.projectId);
                if (project && project.participants > 0) {
                    project.participants--;
                }
            });
    },
})

export default projectsSlice.reducer