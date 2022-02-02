import { StyleSheet, Text, View, } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { useQuery, useMutation } from "@apollo/client";
import GetMessages from '../graphql/get-messages';
import { addNewMessage } from '../graphql/add-message'


let messagesData = null
let message = []



const RoomsData = (props) => {
    const { data, loading} = useQuery(GetMessages(props.id), { pollInterval: 500});


    if (loading) {
        return <Text style={styles.loading}>Loading...</Text>
    }

    return (
        console.log('done'),
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
    }, []);


    const [sendMessage, { data }] = useMutation(addNewMessage);

    const onSend = (previousMessages = []) => {
        setMessages(GiftedChat.append(previousMessages, messages));

        previousMessages.forEach((message) => {
            const { _id, text, createdAt, user } = message;

            sendMessage({
                variables: {
                    roomId: roomId,
                    body: text,
                    insertedAt: createdAt,
                },}
                )
            });
        }
            



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