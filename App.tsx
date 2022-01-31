import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RoomsScreen from './screens/rooms';
import { setContext } from 'apollo-link-context'
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client';



const httpLink = createHttpLink({
    uri: 'https://chat.thewidlarzgroup.com/api/graphql'
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDU1MjMzMzIsImlhdCI6MTY0MzEwNDEzMiwiaXNzIjoiY2hhdGx5IiwianRpIjoiZmY0MjQxMjItNmQ4OS00ZTIxLTk5NzktMTJjMWFlNGYyMmMzIiwibmJmIjoxNjQzMTA0MTMxLCJzdWIiOiJiMzIwZWJiYi0wMmI5LTRmNzgtYmE5Yy1kMjY0NzQyMjA1YWEiLCJ0eXAiOiJhY2Nlc3MifQ.DdXRS-Hr4q3gKMLSIlN2DH0TeVc0kjw885A67dPn4_IPho70HEK91EjyGAiF3OWyFmCk9N9-g01FcQ7I3aPHbw';
    // return the headers to the context so httpLink can read them
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

export default function App() {

  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        <RoomsScreen />
        <StatusBar style="auto" />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
  }
});
