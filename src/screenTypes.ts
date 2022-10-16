import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AlarmInfo } from "./store/alarms";

type AlarmEditMode =
  | { mode: "create" }
  | ({ mode: "update"; id: string } & AlarmInfo);

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Dashboard: undefined;
  "TEMPLATE COPY ME": undefined;
};

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
