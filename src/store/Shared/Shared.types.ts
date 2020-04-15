export type StateTypes = "loading" | "loaded" | "initial" | "rejected";

export interface LoadingInterface {
  status: StateTypes;
  error: any;
}
