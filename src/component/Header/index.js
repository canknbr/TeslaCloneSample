import { Image, View } from 'react-native';
import React from 'react';
import styles from './styles';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../../assets/images/logo.png')}
        style={styles.logo}
      />
      <Image
        source={require('../../../assets/images/menu.png')}
        style={styles.menu}
      />
    </View>
  );
};

export default Header;
