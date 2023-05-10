/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import variables from '../../assets/styles/variables';
import CustomButton from '../../components/Button';
import AppInputText from '../../components/InputText';

const SignUp: React.FC<{navigation: any}> = ({}) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const SignUp = () => {
    console.log('Sign In');
  };
  const SignUpFB = () => {
    console.log('Sign In');
  };
  const SignGoogle = () => {
    console.log('Sign In');
  };
  return (
    <>
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Create a new account</Text>
          <AppInputText
            value={username}
            placeholder="Enter your username"
            onChangeText={setUsername}
            textContentType="username"
          />
          <AppInputText
            value={email}
            placeholder="Enter your email"
            onChangeText={setEmail}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppInputText
            value={password}
            placeholder="Enter your passowrd"
            onChangeText={setPassword}
            secureTextEntry={true}
            textContentType="password"
          />
          <CustomButton title="Sign Up" onpress={SignUp} />
          <View style={styles.footerButtonContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordButtonText}>
                Already have an account? Sign In
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            title="Sign up with Facebook"
            onpress={SignGoogle}
            bgColor="#E7EAF4"
            fgColor="#4765A9"
          />
          <CustomButton
            title="Sign up with Google"
            onpress={SignUpFB}
            bgColor="#FAE9EA"
            fgColor="#DD4D49"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: '#202020',
    fontWeight: '500',
    marginVertical: 15,
    textAlign: 'center',
  },
  footerButtonContainer: {
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotPasswordButtonText: {
    fontSize: variables.fontSize,
    fontWeight: '300',
  },
});
export default SignUp;
