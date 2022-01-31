import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RoomsScreen from './screens/rooms';


export default function App() {

  return (
    <View style={styles.container}>
      <RoomsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
  }
});
