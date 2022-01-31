import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { SearchSvg, RoomsSvg } from '../components/svg-icons';
import Rooms from '../components/single-room';

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
            <Rooms />
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