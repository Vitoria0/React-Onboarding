import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { saveData } from "../../shared/common/saveData";

export interface UserDataState {
  data: {
    blockVideo: (boolean | null)[];
    blockSlide: { isClicked: boolean; isOpacity: boolean }[];
  };
}

export const initialUserDataState: UserDataState = {
  data: {
    blockVideo: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
    blockSlide: [
      {
        isClicked: true,
        isOpacity: true,
      },
      {
        isClicked: false,
        isOpacity: true,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
      {
        isClicked: false,
        isOpacity: false,
      },
    ],
  },
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialUserDataState,
  reducers: {
    setData: (state, action) => {
      saveData("cmi.suspend_data", action);
      state.data = action.payload;
    },
  },
});

export const { setData } = userDataSlice.actions;

export const selectUserData = (state: RootState) => state.userData.data;
export default userDataSlice.reducer;
