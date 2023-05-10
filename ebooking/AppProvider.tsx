import React, {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';

const AppProvider: React.FC<PropsWithChildren<{}>> = ({children}) => {
  return <NavigationContainer>{children}</NavigationContainer>;
};

export default AppProvider;
