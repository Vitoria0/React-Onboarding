import { PayloadAction } from "@reduxjs/toolkit";
import { connectionIsActive, setUserData } from "../../scorm/scorm-functions";

export const saveData = (dataModel: string, action: PayloadAction) => {
  const serializedData = JSON.stringify(action.payload);

  connectionIsActive()
    ? setUserData(dataModel, serializedData)
    : import.meta.env.MODE === "development" &&
      localStorage.setItem(dataModel, serializedData);
};
