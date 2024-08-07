import { getUserData } from "../../scorm/scorm-functions";
import { isValidJSON } from "./isValidJSON";

export const fetchData = async (
  dataModel: string,
  defaultValue: string | number | boolean | [] | unknown = {}
) => {
  const data = getUserData(dataModel);

  if (isValidJSON(data)) {
    return JSON.parse(data);
  } else if (
    import.meta.env.MODE === "development" &&
    localStorage.getItem(dataModel) &&
    isValidJSON(localStorage.getItem(dataModel)!)
  ) {
    return JSON.parse(localStorage.getItem(dataModel)!);
  }
  return defaultValue;
};
