import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import { SearchSvg, RoomsSvg } from '../components/svg-icons';
import Rooms from '../components/single-room';
import { GetRooms } from '../graphql/get-room';
import { useQuery } from '@apollo/client';

const RoomsData = () => {
    const { data, loading} = useQuery(GetRooms);

    useEffect(() => {
        console.log(data);
    }, [data]);

    if (loading) {
        return <Text style={styles.loading}>Loading...</Text>
    }

    let roomNumber = 0

    return data.usersRooms.rooms.map(room => {
        console.log(room.name)
        return <Rooms name={room.name}/>
    });
    
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