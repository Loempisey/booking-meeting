import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {Icon} from '@rneui/themed';

interface InputTextProps {
  leftIcon?: any;
  placeholder?: string;
  value: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: any;
  textContentType?: any;
}

const AppInputText: React.FC<InputTextProps> = ({
  leftIcon,
  placeholder,
  value,
  secureTextEntry,
  onChangeText,
  keyboardType,
  textContentType,
}) => {
  return (
    <View style={styles.container}>
      {leftIcon && (
        <Icon name={leftIcon} size={20} color="#6e6869" style={styles.icon} />
      )}
      <TextInput
        placeholderTextColor="#6e6869"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        textContentType={textContentType}
      />
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
});
export default AppInputText;
