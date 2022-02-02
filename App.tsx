import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider} from '@apollo/client';
import { setContext } from 'apollo-link-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RoomsScreen from './screens/rooms';
import ChatScreen from './screens/chat';
import { tokenKey } from './token';


const httpLink = createHttpLink({
    uri: 'https://chat.thewidlarzgroup.com/api/graphql'
});

const authLink = setContext((_, { headers }) => {
    
  // Replace this token in token.tsx inside root DIR incase that you want to use yours account.
    const token = tokenKey;
    
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

// Good place to start working with Errors 
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function HomeScreen() {
  return (
      <View style={styles.container}>
        <RoomsScreen />
        <StatusBar style="auto" />
      </View>
    )
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
//Style should be managed in separate file.
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
  }
});
