export const isValidJSON = (str: string) => {
  try {
    if (JSON.parse(str)) return true;
    else return false;
  } catch (e) {
    console.error("String: ", str, "Error: ", e);
    return false;
  }
};
