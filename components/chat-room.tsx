import { StyleSheet, Text, View, } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { gql, useQuery } from "@apollo/client";
import GetMessages from '../graphql/get-messages';

let messagesData = null
let message = []



const RoomsData = (props) => {
    const { data, loading} = useQuery(GetMessages(props.id));


    if (loading) {
        return <Text style={styles.loading}>Loading...</Text>
    }

    return (
        messagesData = data.room.messages,
        messagesData.map(message => {
        }),
        message = messagesData.map(message => (
            {
            _id: `${message.id}`,
            text: `${ message.body }`,
            createdAt: new Date(),
            user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
            },
        })),
        <Text>Done</Text>
    )
    
}


export default function ChatRoom(props) {

    let roomId = props.roomName.id


    const [messages, setMessages] = useState([]);


    useEffect(() => {
        setMessages(message)
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])



    return (
        <View style={styles.underHeader}>
            <RoomsData id={roomId}/>
            <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            user={{
                _id: 1,
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    underHeader: {
        flex: 1,    
    },
    loading: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Poppins',
        color: '#5603AD',
    }
})