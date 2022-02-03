import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react'
import { GiftedChat, Bubble, InputToolbar, Composer } from 'react-native-gifted-chat'
import { useQuery, useMutation,useLazyQuery } from "@apollo/client";
import GetMessages from '../graphql/get-messages';
import { addNewMessage } from '../graphql/add-message'
import { useFonts } from 'expo-font';
import { currentUser } from '../graphql/current-user'
import { SendSvg } from './svg-icons';


export default function ChatRoom(props) {

    const { data:user, loading:userLoading} = useQuery(currentUser);
    const { data:dataMessage, loading:messageLoading} = useQuery(GetMessages(props.roomName.id), { pollInterval: 500});

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        //Waiting for data from useQuery
        if (dataMessage) {

        setMessages(
            dataMessage.room.messages.map(message => (
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
        );
    }}, [dataMessage]);


    const [sendMessage, { data }] = useMutation(addNewMessage);
    
    const onSend = (previousMessages = []) => {
        setMessages(GiftedChat.append(previousMessages, messages));

        previousMessages.forEach((message) => {
            const { _id, text, createdAt, user } = message;

            sendMessage({
                variables: {
                    roomId: props.roomName.id,
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
    if (messageLoading) {
        return <Text style={styles.loading}>Loading...</Text>
    }


    return (
        <View style={styles.messageContainer}>
            <GiftedChat
            messages={messages}
            onSend={messages => onSend(messages)}
            maxComposerHeight={80}
            bottomOffset={-40}
            alwaysShowSend
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
                    <Composer
                    {...props}
                    textInputStyle={styles.composer}
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
        paddingLeft: 10,
        paddingTop: 12,
    },
    loading: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'Poppins',
        color: '#5603AD',
    }
})