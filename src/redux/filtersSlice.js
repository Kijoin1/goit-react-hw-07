import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const selectNameFilter = (state) => state.filters.name;
