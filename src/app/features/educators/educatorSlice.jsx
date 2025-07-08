import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedEducatorId: null,
    filters: {
        keyword: "",
        tags: [],
    },
};

const educatorSlice = createSlice({
    name: "educator",
    initialState,
    reducers: {
        setSelectedEducatorId: (state, action) => {
            state.selectedEducatorId = action.payload;
        },
        setFilters: (state, action) => {
            state.filters = action.payload;
        },
    },
});

export const { setSelectedEducatorId, setFilters } = educatorSlice.actions;
export default educatorSlice.reducer;
