import { Text, View, Pressable } from 'react-native';
import React from 'react';
import styles from './styles';
const Button = ({ type, text }) => {
  const bgc = type === 'primary' ? '#307EA5' : '#67CEBB';
  const txtColor = type === 'primary' ? '#F3E5E5' : '#4D5A5B';
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: bgc }]}
        onPress={() => console.warn('sdfkjsldf')}
      >
        <Text style={[styles.text, { color: txtColor }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default Button;
