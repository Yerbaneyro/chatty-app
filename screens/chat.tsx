import { StyleSheet, Text, View} from 'react-native';

export default function ChatHeader() {
    return (
        <View style={styles.chatMenu}>
            <Text>Chat</Text>
            <Text>Back</Text>
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
    }})