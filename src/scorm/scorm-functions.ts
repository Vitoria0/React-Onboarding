import pipwerks from "pipwerks-scorm-api-wrapper";

export const startLMS = async () => {
  try {
    await pipwerks.SCORM.init();
    pipwerks.SCORM.set("cmi.core.score.min", "0");
    pipwerks.SCORM.set("cmi.core.score.max", "100");
    return pipwerks.SCORM.connection.isActive;
  } catch (error) {
    console.error("Erro ao verificar se SCORM iniciou" + error);
  }
};

export const connectionIsActive = () => {
  return pipwerks.SCORM.connection.isActive;
};

export const getUserData = (dataModel: string) => {
  return pipwerks.SCORM.get(dataModel);
};

export const setUserData = (dataModel: string, value: string) => {
  pipwerks.SCORM.set(dataModel, value);
  pipwerks.SCORM.save();
};

export const completeCourse = () => {
  pipwerks.SCORM.set("cmi.core.lesson_status", "completed");
};

export const exitLMS = () => {
  pipwerks.SCORM.quit();
};

export const getStudentName = () => {
  return getUserData("cmi.core.student_name");
};
