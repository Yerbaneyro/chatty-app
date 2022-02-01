import { StyleSheet, Text, View, } from 'react-native';
import { useFonts } from 'expo-font';


export default function ChatRoom(props) {
    
    const [loaded] = useFonts({
        SFCompactText: require('../assets/fonts/SFCompactText-Regular.ttf'),

    });

    if (!loaded) {
        return null;
    }

    return (
        <View>
            <Text style={styles.underHeader}>{ props.roomName.roomName }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    underHeader: {
        textAlign: 'center',
        fontSize: 10,
        fontFamily: 'SFCompactText',
    }
})