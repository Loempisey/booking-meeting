import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Icon} from '@rneui/themed';

interface InputTextProps {
  leftIcon?: any;
  otherProps: any[];
}

const AppInputText: React.FC<InputTextProps> = ({leftIcon, otherProps}) => {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <Icon name={leftIcon} size={20} color="#6e6869" style={styles.icon} />
      )}
      <TextInput placeholder="Enter your name" {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    width: '80%',
    fontSize: 18,
    color: '#101010',
  },
});
export default AppInputText;
