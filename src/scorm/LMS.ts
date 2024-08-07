import { initialLocationState } from "../features/location/locationSlice";
import { initialUserDataState } from "../features/user/userDataSlice";
import { fetchData } from "../shared/common/fetchData";
import { startLMS } from "./scorm-functions";

export class LMS {
  private static instance: LMS;

  static MAX_ATTEMPTS = 10;
  static connection: boolean | undefined = false; // Default to false initially

  static userLocation: number;
  static userData: unknown = {};

  static async initialize() {
    if (import.meta.env.MODE === "production") {
      LMS.connection = await startLMS();
    } else {
      LMS.connection = true;
    }
  }

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
      console.error("Erro ao buscar userData: ", e);
    }
  }

  async connect(): Promise<boolean> {
    let attempts = 0;

    while (!LMS.connection && attempts < LMS.MAX_ATTEMPTS) {
      try {
        LMS.connection = await startLMS();
        if (LMS.connection) {
          // Connection successful, exit loop
          break;
        }
        attempts++;
      } catch (e) {
        alert(`Erro ao tentar conectar na vez: ${attempts}`);
        alert(`Erro ocorrido: ${e}`);
        attempts++;
      }
    }

    if (!LMS.connection) {
      // If we exit the loop without a successful connection
      throw new Error("Falha na conexão ao LMS após múltiplas tentativas.");
    }

    try {
      // Perform additional setup if connection is established
      await LMS.settingLastPage();
      await LMS.settingUserData();
      return true; // Connection was successful
    } catch (e) {
      // Handle any errors that occur during additional setup
      console.error("Erro durante a configuração do LMS:", e);
      return false;
    }
  }

  get lastPage() {
    return LMS.userLocation;
  }
}
