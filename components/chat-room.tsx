import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react'
import { GiftedChat, Bubble, InputToolbar } from 'react-native-gifted-chat'
import { useQuery, useMutation } from "@apollo/client";
import GetMessages from '../graphql/get-messages';
import { addNewMessage } from '../graphql/add-message'
import { useFonts } from 'expo-font';
import { currentUser } from '../graphql/current-user'
import { SendSvg } from './svg-icons';

// THIS VARIABLE CREATING PROBLEMS WITH UPLOADING DATA SHOULD BE REPLEACED BY useState
let messagesData = null
let message = []
let userData = {}



const RoomsData = (props) => {
    const { data, loading} = useQuery(GetMessages(props.id), { pollInterval: 500});
    

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
            createdAt: `${message.insertedAt}`,
            user: {
            _id: `${message.user.id}`,
            name: `${message.user.firstName}`,
            avatar: 'https://placeimg.com/140/140/any',
            },
        })),
        <Text></Text>
    )
    
}


export default function ChatRoom(props) {

    let roomId = props.roomName.id

    const { data:user, loading:userLoading} = useQuery(currentUser);

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
            

    const [loaded] = useFonts({
        SFCompactText: require('../assets/fonts/SFCompactText-Regular.ttf'),
    });
    
    //Bit of Loading management
    if (!loaded) {
        return null;
    }

    if (userLoading) {
        return <Text style={styles.loading}>Loading...</Text>
    }


    return (
        <View style={styles.messageContainer}>
            <RoomsData id={roomId}/>
            <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            maxComposerHeight={80}
            bottomOffset={-40}
            renderChatFooter={() => <View style={{ height: 88 }} />}
            renderInputToolbar={props => {
                return (
                    <InputToolbar
                    {...props}
                    containerStyle={{
                    height: 102,
                    backgroundColor: '#B6DEFD',
                    paddingTop: 16,
                    borderTopRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderColor: 'white',
                    }}
                    primaryStyle={{ alignItems: 'center' }}
                />
                )
            }}
            renderBubble={props => {
                return (
                    <Bubble
                    {...props}
            
                    textStyle={{
                        right: {
                        color: '#FFFFFF',
                        fontFamily: "SFCompactText",
                        fontSize: 14,
                        },
                        left: {
                        color: '#1A1A1A',
                        fontFamily: "SFCompactText",
                        fontSize: 14,
                        },
                    }}
                    wrapperStyle={{
                        left: {
                        backgroundColor: '#FFFFFF',
                        },
                        right: {
                        backgroundColor: "#993AFC",
                        },
                    }}
                    />
                );
                }}
            renderSend={props => {
                return (
                    <TouchableOpacity onPress={() => {props.onSend({ text: props.text.trim() }, true)}} >
                        <SendSvg style={styles.sendButton}/>
                    </TouchableOpacity>    
                )
                }} 
            renderComposer={props => {
                return (
                    <TextInput 
                    {...props}
                    placeholder='Welcome to Chatty...type here...'
                    style={styles.composer}
                    />
                )
            }}
            user={{
                _id: `${user.user.id}`,
                name: `${user.user.firstName + ' ' + user.user.lastName}`
            }}
            />
                
        </View>
        
    )

    
}



const styles = StyleSheet.create({
    messageContainer: {
        flex: 1,    
    },
    sendButton: {
        marginRight: 21,
        marginLeft: 17,
    },
    composer: {
        backgroundColor: 'white',
        marginLeft: 16,
        width: 287,
        height: 41,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        textAlign: 'center',
    },
    loading: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Poppins',
        color: '#5603AD',
    }
})