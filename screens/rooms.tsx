import { StyleSheet, Text, View } from 'react-native';
import { 
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic 
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { SearchSvg, RoomsSvg } from '../components/svg-icons';

export default function Rooms() {

    let [fontLoaded, error] = useFonts({
        Poppins_100Thin,
        Poppins_100Thin_Italic,
        Poppins_200ExtraLight,
        Poppins_200ExtraLight_Italic,
        Poppins_300Light,
        Poppins_300Light_Italic,
        Poppins_400Regular,
        Poppins_400Regular_Italic,
        Poppins_500Medium,
        Poppins_500Medium_Italic,
        Poppins_600SemiBold,
        Poppins_600SemiBold_Italic,
        Poppins_700Bold,
        Poppins_700Bold_Italic,
        Poppins_800ExtraBold,
        Poppins_800ExtraBold_Italic,
        Poppins_900Black,
        Poppins_900Black_Italic 
        });


    return (
        <View style={styles.menu}>
            <Text style={styles.headerText}>Rooms</Text>
            <View style={styles.icons}>
                <SearchSvg style={styles.search}/>
                <RoomsSvg />
            </View>
                        
        </View>
    );
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
            fontFamily: 'Poppins_700Bold',
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