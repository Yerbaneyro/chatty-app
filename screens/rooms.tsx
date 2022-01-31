import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { SearchSvg, RoomsSvg } from '../components/svg-icons';
import Rooms from '../components/single-room';
import { GetRooms } from '../graphql/get-room';
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

const RoomsData = () => {
    const { data, loading} = useQuery(GetRooms);

    if (loading) {
        return <Text>Loading...</Text>
    }

    return <Text>Conection Established</Text>
    
}

export default function RoomsScreen() {

    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <ApolloProvider client={client}>
            <View>
                <Header />
                <Rooms />
                <RoomsData />
            </View>
        </ApolloProvider>
    );
}

function Header() {
    return (
        <View style={styles.menu}>
            <Text style={styles.headerText}>Rooms</Text>
            <View style={styles.icons}>
                <SearchSvg style={styles.search}/>
                <RoomsSvg />
            </View>            
        </View>
    )
}

    const styles = StyleSheet.create({
        menu: {
            backgroundColor: '#B6DEFD',
            height: 120,
            borderBottomLeftRadius: 24,
            borderBottomRightRadius: 24,
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        headerText: {
            fontSize: 28,
            fontFamily: 'Poppins',
            color: '#5603AD',
            marginTop: 61,
            marginLeft: 16,
        },
        icons: {
            flexDirection: 'row',
            marginTop: 60,
            marginRight: 16,
        },
        search: {
            marginRight: 8,
        }
});