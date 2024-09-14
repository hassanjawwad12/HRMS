import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit';

const initialState = {
    members: [
        {
            id: 1,
            name: 'John Doe',
            companyEmail: 'example@email.com',
            projectsAssigned: 2,
        },
        {
            id: 2,
            name: 'John Doe',
            companyEmail: 'example2@email.com',
            projectsAssigned: 2,
        },
    ]
}

export const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {
    addMember: (state, { payload }) =>
    {
        console.log(payload);
        state.members = [...state.members, {...payload, id: nanoid(), projectsAssigned: 0}];
    },
    setMembers: (state, { payload }) =>
    {
        state.members = [...payload];
    }
  },
})

export const { addMember, setMembers } = membersSlice.actions;

export default membersSlice.reducer;