import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    projects: [
        {
            id: 1,
            name: 'Demo',
            lead: 'alex123',
            startedAt: new Date(),
            deadline: new Date(),
            members: 2,
            meetings: 3
        },
        {
            id: 2,
            name: 'Demo',
            lead: 'alex123',
            startedAt: new Date(),
            deadline: new Date(),
            members: 2,
            meetings: 3
        },
    ]
}

export const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, { payload }) => {
            console.log(payload);
            state.projects = [...state.projects, { ...payload, id: nanoid(), members: 0, meetings: 0 }];
        },
        setProjects: (state, { payload }) => {
            state.projects = [...payload];
        }
    },
})

export const { addProject, setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;