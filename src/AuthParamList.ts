import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from '@react-navigation/stack';

export type AuthParamList = {
  Login: undefined;
  Register: undefined;
};

export type AuthNavProps<T> = {
  navigation: StackNavigationProp<AuthParamList, "Register">;
  route: RouteProp<AuthParamList, "Register">;
}