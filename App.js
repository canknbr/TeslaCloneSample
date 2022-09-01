import { StyleSheet, View, FlatList, Dimensions } from 'react-native';
import CarItem from './src/component/CarItem/index.js';
import { StatusBar } from 'expo-status-bar';
import Header from './src/component/Header/index.js';
import cars from './src/data/cars.js';
export default function App() {
  const renderCars = ({ item }) => {
    return <CarItem model={item.model} price={item.price} image={item.image} />;
  };
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={cars}
        renderItem={renderCars}
        keyExtractor={item => item.id}
        snapToAlignment="start"
        snapToInterval={Dimensions.get('window').height}
        decelerationRate="fast"
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
});
