import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { PhoneSvg, VideoSvg, ProfileSvg, BackButtonSvg } from '../components/svg-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function ChatHeader() {
    const [loaded] = useFonts({
        SFCompactText: require('../assets/fonts/SFCompactText-Regular.ttf'),
        Poppins: require('../assets/fonts/Poppins-Medium.ttf')
    });

    if (!loaded) {
        return null;
    }

    const navigation = useNavigation();

    return (
        <View style={styles.chatMenu}>
            <View style={styles.headerLeftContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/Icons/left-arrow.png')} style={styles.backButton}/>
                </TouchableOpacity>
                <ProfileSvg style={styles.profilePicture}/>
                <HeaderChatText />
            </View>
            <View style={styles.icons}>
                <PhoneSvg style={styles.search}/>
                <VideoSvg />
            </View>  
        </View>
    )
}

function HeaderChatText() {
    return (
        <View style={styles.chatHeaderText}>
            <Text style={styles.headerUser}>User</Text>
            <Text style={styles.activityChat}>Active now</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    chatMenu: {
        backgroundColor: '#B6DEFD',
        height: 120,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 36,
    },
    headerLeftContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    backButton: {
        height: 16,
        width: 8,
        marginTop: 74,
        marginLeft: 18,
    },
    profilePicture: {
        transform: [{ scale: 0.72 }],
        borderRadius: 50,
        marginTop: 50,
        marginLeft: 18,
    },
    chatHeaderText: {
        marginTop: 63,
        marginLeft: 12,
    },
    headerUser: {
        fontSize: 14,
        fontFamily: 'Poppins',
        color: '#5603AD',
    },
    activityChat: {
        fontSize: 14,
        fontFamily: 'SFCompactText',
        color: '#FFFFFF'
    },
    icons: {
        flexDirection: 'row',
        marginTop: 60,
        marginRight: 16,
    },  
    search: {
        marginRight: 8,
    },
})