import React from "react";
import {
  connectionIsActive,
  getUserData,
  setUserData,
} from "../scorm/scorm-functions";

const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

const useSemiPersistentUserData = (dataModel, initialData) => {
  const fetchData = () => {
    let data = getUserData(dataModel);

    if (isValidJSON(data) && data !== "null") {
      return JSON.parse(data);
    } else if (
      localStorage.getItem(dataModel) &&
      isValidJSON(localStorage.getItem(dataModel))
    ) {
      return JSON.parse(localStorage.getItem(dataModel));
    }

    return initialData;
  };

  const [data, setData] = React.useState(fetchData);

  const scormConnectionIsActive = connectionIsActive();

  React.useEffect(() => {
    const serializedData = JSON.stringify(data);
    scormConnectionIsActive
      ? setUserData(dataModel, serializedData)
      : localStorage.setItem(dataModel, serializedData);
  }, [data, dataModel]);

  const getValue = (key) => data[key];
  const setValue = (key, value) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
  };

  return [getValue, setValue];
};
export default useSemiPersistentUserData;
