import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
};

export type RootStackParamList = {
  TabNavigation: undefined;
  HomeScreen: undefined;
  MemberScreen: undefined;
  RoomScreen: undefined;
  SettingScreen: undefined;
};

export type AuthNavigationProps = NativeStackScreenProps<AuthStackParamList>;
export type RootNavigationProps = NativeStackScreenProps<RootStackParamList>;
