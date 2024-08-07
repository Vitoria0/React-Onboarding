import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { saveData } from "../../shared/common/saveData";

export interface Location {
  location: number;
}

export const initialLocationState: Location = {
  location: 0,
};

export const locationSlice = createSlice({
  name: "location",
  initialState: initialLocationState,
  reducers: {
    setLocation: (state, action) => {
      saveData("cmi.core.lesson_location", action);
      state.location = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;

export const selectLocation = (state: RootState) => state.location.location;
export default locationSlice.reducer;
