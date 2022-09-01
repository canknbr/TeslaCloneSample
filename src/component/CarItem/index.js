import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import Button from '../Button/index';
const CarItem = ({ model, price, image }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.car} />
      <View style={styles.titles}>
        <Text style={styles.title}>{model}</Text>
        <Text style={styles.subtitle}>Starting at ${price}</Text>
      </View>
      <View style={styles.buttons}>
        <Button type="primary" text="Buy Now" />
        <Button text="Details" />
      </View>
    </View>
  );
};
export default CarItem;
