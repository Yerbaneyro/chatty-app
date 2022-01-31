import { StyleSheet, Text, Image, View } from 'react-native';
import { ProfileSVG } from './svg-icons';
import { useFonts } from 'expo-font';


export default function Rooms() {
    return (
        <View style={styles.roombox}>
            <ProfileSVG style={styles.profile} />
            <RoomText />
            <LastActivity />
        </View>   
    )
}

function RoomText() {
    const [loaded] = useFonts({
        SFCompactText: require('../assets/fonts/SFCompactText-Regular.ttf'),
        Poppins: require('../assets/fonts/Poppins-Medium.ttf')
    });

    if (!loaded) {
        return null;
    }


    return (
        <View style={styles.roomTextContainer}>
            <Text style={styles.roomName}>Room Name</Text>
            <Text style={styles.lastMessage}>Last Message</Text>
        </View>
    )
}

function LastActivity() {
    return (
        <View style={styles.activity}>
            <text></text>
        </View>
    )
}

const styles = StyleSheet.create ({
    roombox: {
        marginTop: 36,
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
        fontSize: 15,
        color: '#FFFFFF',
        width: 242,
    },
    lastMessage: {
        fontFamily: 'SFCompactText',
        fontSize: 14,
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