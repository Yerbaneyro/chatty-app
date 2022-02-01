import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';
import { setContext } from 'apollo-link-context'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatHeader from './screens/chat';
import RoomsScreen from './screens/rooms';


const httpLink = createHttpLink({
    uri: 'https://chat.thewidlarzgroup.com/api/graphql'
});

const authLink = setContext((_, { headers }) => {
    
    const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDU1MjMzMzIsImlhdCI6MTY0MzEwNDEzMiwiaXNzIjoiY2hhdGx5IiwianRpIjoiZmY0MjQxMjItNmQ4OS00ZTIxLTk5NzktMTJjMWFlNGYyMmMzIiwibmJmIjoxNjQzMTA0MTMxLCJzdWIiOiJiMzIwZWJiYi0wMmI5LTRmNzgtYmE5Yy1kMjY0NzQyMjA1YWEiLCJ0eXAiOiJhY2Nlc3MifQ.DdXRS-Hr4q3gKMLSIlN2DH0TeVc0kjw885A67dPn4_IPho70HEK91EjyGAiF3OWyFmCk9N9-g01FcQ7I3aPHbw';
    
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function HomeScreen() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <RoomsScreen />
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  )
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
  }
});
