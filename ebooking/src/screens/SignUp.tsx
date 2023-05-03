import React from 'react';
import {Auth} from 'aws-amplify';
import {Text, View, SafeAreaView} from 'react-native';

import AppButton from '../components/Button';
import AppInputText from '../components/InputText';

interface SignUpProps {
  navigation: any;
}

const SignUp: React.FC<SignUpProps> = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  // const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // eslint-disable-next-line @typescript-eslint/no-shadow
  async function SignUp() {
    try {
      await Auth.signUp({username, password, attributes: {email}});
      navigation.navigate('ConfirmSignUp', {username});
    } catch (error) {
      console.log('error signing up:', error);
    }
  }
  const handleUsername = (text: string) => {
    setUsername(text);
  };
  const handleEmail = (text: string) => {
    setEmail(text);
  };
  const handlePassword = (text: string) => {
    setPassword(text);
  };

  return (
    <>
      <SafeAreaView>
        <View>
          <Text>Create a new account</Text>
          <AppInputText
            value={username}
            onChangeText={handleUsername}
            leftIcon="user"
            placeholder="Enter your name"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppInputText
            value={email}
            onChangeText={handleEmail}
            leftIcon="user"
            placeholder="Enter your name"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppInputText
            value={password}
            onChangeText={handlePassword}
            leftIcon="user"
            placeholder="Enter your name"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppButton title="SignUp" onpress={SignUp} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
