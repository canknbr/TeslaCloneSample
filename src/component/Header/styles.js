import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    zIndex: 1,
    top: 50,
  },
  logo: {
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  menu: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;
