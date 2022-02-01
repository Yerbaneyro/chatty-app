import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ProfileSVG } from './svg-icons';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';


export default function Rooms(props) {
    
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.roombox} onPress={() => navigation.navigate('Chat')}>
            <ProfileSVG style={styles.profile} />
            <RoomText name={props}/>
            <LastActivity />
        </TouchableOpacity>   
    )
}

function RoomText(props) {
    const [loaded] = useFonts({
        SFCompactText: require('../assets/fonts/SFCompactText-Regular.ttf'),
        Poppins: require('../assets/fonts/Poppins-Medium.ttf')
    });

    if (!loaded) {
        return null;
    }


    return (
        console.log(props.name),
        <View style={styles.roomTextContainer}>
            <Text style={styles.roomName}>{Object.values(props.name)}</Text>
            <Text style={styles.lastMessage}>Last Message</Text>
        </View>
    )
}

function LastActivity() {
    return (
        <View style={styles.activity}>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    roombox: {
        marginBottom: 12,
        height: 88,
        backgroundColor: '#5603AD',
        borderRadius: 12,
        flexDirection: 'row',
    },
    profile: {
        height: 64,
        width: 64,
        marginTop: 12,
        marginBottom: 12,
        marginLeft:16,
    },
    roomTextContainer: {
        marginTop: 25,
        marginLeft: 16,
        
    },
    roomName: {
        fontFamily: 'Poppins',
        fontSize: 13,
        color: '#FFFFFF',
        width: 242,
    },
    lastMessage: {
        fontFamily: 'SFCompactText',
        fontSize: 12,
        color: '#F0F8FF',
    },
    activity: {
        backgroundColor: '#A8FF76',
        width: 12,
        height: 12,
        marginTop: 12,
        borderRadius: 50,
        position: 'absolute',
        right: 16,

    }
});