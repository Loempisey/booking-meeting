import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string;
  onpress: () => void;
  bgColor?: string;
  fgColor?: string;
}

const CustomButton: React.FC<ButtonProps> = ({
  title,
  onpress,
  bgColor,
  fgColor,
}) => {
  return (
    <View style={styles.constainer}>
      <TouchableOpacity
        style={[styles.button, bgColor ? {backgroundColor: bgColor} : {}]}
        onPress={onpress}>
        <Text style={[styles.buttonText, fgColor ? {color: fgColor} : {}]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    alignItems: 'center',
  },
  button: {
    marginVertical: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '80%',
    backgroundColor: '#3B71F3',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default CustomButton;
