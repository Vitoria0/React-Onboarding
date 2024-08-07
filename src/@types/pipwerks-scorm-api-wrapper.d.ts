declare module "pipwerks-scorm-api-wrapper" {
  interface ScormConnection {
    isActive: boolean;
  }

  interface ScormAPI {
    init(): boolean;
    get(key: string): string;
    set(key: string, value: string): boolean;
    save(): boolean;
    quit(): boolean;
    SCORM: {
      init(): boolean;
      get(key: string): string;
      set(key: string, value: string): boolean;
      save(): boolean;
      quit(): boolean;
      connection: ScormConnection;
    };
  }

  const pipwerksScormApiWrapper: ScormAPI;
  export default pipwerksScormApiWrapper;
}
