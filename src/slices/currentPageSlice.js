import { createSlice } from '@reduxjs/toolkit'
import dashboard from '../assets/icons/dashboard.svg'

const initialState = {
    title: 'Dashboard',
    description: '',
    name: 'Dashboard',
    src: dashboard,
    route: '/pms/dashboard',
}

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    changePage: (state, { payload }) =>
    {
        state.title = payload.title;
        state.description = payload.description;
        state.name = payload.name;
        state.src = payload.src;
        state.route = payload.route;
    }
  },
})

export const { changePage } = currentPageSlice.actions;

export default currentPageSlice.reducer;