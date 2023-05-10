import React from 'react';
import {View} from 'react-native';
import config from './src/aws-exports';
import {Amplify} from 'aws-amplify';
import SignIn from './src/screens/Auth/SignIn';
// import AppProvider from './AppProvider';
// import Navigator from './src/components/Navigation/Navigator';

Amplify.configure(config);

const App = () => {
  return (
    <>
      <View>
        <SignIn navigation={undefined} />
        {/* <SignUp navigation={undefined} /> */}
      </View>
    </>
  );
};

export default App;
