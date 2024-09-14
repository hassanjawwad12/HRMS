import { configureStore } from "@reduxjs/toolkit";
import currentPageSlice from "./slices/currentPageSlice";
import membersSlice from "./slices/membersSlice";
import projectsSlice from "./slices/projectsSlice";

const store = configureStore({
    reducer: {
        currentPage: currentPageSlice,
        members: membersSlice,
        projects: projectsSlice
    }
});

export default store;