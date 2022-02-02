import { StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { useFonts } from 'expo-font';

import { SearchSvg, RoomsSvg } from '../components/svg-icons';
import Rooms from '../components/single-room';
import { GetRooms } from '../graphql/get-room';


let userName = ""

const RoomsData = () => {
    const { data, loading} = useQuery(GetRooms, { pollInterval:500 });


    if (loading) {
        return <Text style={styles.loading}>Loading...</Text>
    }

    return (
        userName = `${data.usersRooms.user.firstName + ' ' + data.usersRooms.user.lastName } `,
        data.usersRooms.rooms.map(room => {
        return (<Rooms key={room.id} id={room.id} name={room.name} user={userName}/>)
    }));
    
}

export default function RoomsScreen() {

    const [loaded] = useFonts({
        Poppins: require('../assets/fonts/Poppins-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View>
            <Header />
            <RoomsData/>
        </View>
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
            marginBottom: 36,
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
        },
        loading: {
            textAlign: 'center',
            fontSize: 30,
            fontFamily: 'Poppins',
            color: '#5603AD',
        }
});