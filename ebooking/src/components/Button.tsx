import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string;
  onpress: () => void;
}

const AppButton: React.FC<ButtonProps> = ({title, onpress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={onpress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '80%',
    backgroundColor: 'tomato',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
});

export default AppButton;
