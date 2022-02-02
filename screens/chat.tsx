import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { PhoneSvg, VideoSvg, ProfileSvg } from '../components/svg-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import ChatRoom from '../components/chat-room';

export default function ChatScreen({route}) {
    
    let roomData = route.params

    return (
        <View style={styles.chatContainer}>
            <ChatHeader user={roomData}/>
            <ChatRoom roomName={roomData}/>
        </View>
    )
}

function ChatHeader(props) {

    const [loaded] = useFonts({
        SFCompactText: require('../assets/fonts/SFCompactText-Regular.ttf'),
        Poppins: require('../assets/fonts/Poppins-Medium.ttf')
    });

    const navigation = useNavigation();

    if (!loaded) {
        return null;
    }

    return(
        <View style={styles.chatMenu}>
            <View style={styles.headerLeftContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/Icons/left-arrow.png')} style={styles.backButton}/>
                </TouchableOpacity>
                <ProfileSvg style={styles.profilePicture}/>
                <View style={styles.chatHeaderText}>
                    <Text style={styles.headerUser}>{props.user.user}</Text>
                    <Text style={styles.activityChat}>Active now</Text>
                </View>
            </View>
            <View style={styles.icons}>
                <PhoneSvg style={styles.search}/>
                <VideoSvg />
            </View>  
        </View>
    )

}

const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
    },
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