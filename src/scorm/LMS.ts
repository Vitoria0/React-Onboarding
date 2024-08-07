import { initialLocationState } from "../features/location/locationSlice";
import { initialUserDataState } from "../features/user/userDataSlice";
import { fetchData } from "../shared/common/fetchData";
import { startLMS } from "./scorm-functions";

export class LMS {
  private static instance: LMS;

  static MAX_ATTEMPTS = 10;
  static connection = import.meta.env.MODE === "production" ? startLMS() : true;

  static userLocation: number;
  static userData: unknown = {};

  static getInstance() {
    if (!LMS.instance) {
      LMS.instance = new LMS();
    }
    return LMS.instance;
  }

  static async settingLastPage() {
    try {
      const userLocation = await fetchData(
        "cmi.core.lesson_location",
        initialLocationState.location
      );
      LMS.userLocation = userLocation;
    } catch (e) {
      console.error("Erro ao buscar userLocation: ", e);
    }
  }

  static async settingUserData() {
    try {
      const userData = await fetchData(
        "cmi.suspend_data",
        initialUserDataState.data
      );
      LMS.userData = userData;
    } catch (e) {
      console.error("Erro ao buscar userLocation: ", e);
    }
  }

  async connect() {
    let attempts = 0;

    while (!LMS.connection && attempts < LMS.MAX_ATTEMPTS) {
      try {
        LMS.connection = await startLMS();
        attempts++;
      } catch (e) {
        alert(`Erro ao tentar conectar na vez: ${attempts}`);
        alert(`Erro ocorrido: ${e}`);
      }
    }

    if (attempts === LMS.MAX_ATTEMPTS) {
      throw new Error("Falha na conexão ao LMS após múltiplas tentativas.");
    }

    await LMS.settingLastPage();
    await LMS.settingUserData();

    return LMS.connection;
  }

  get lastPage() {
    return LMS.userLocation;
  }
}
