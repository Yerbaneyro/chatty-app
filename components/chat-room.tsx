import { StyleSheet, Text, View, } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'


export default function ChatRoom(props) {
    
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <View style={styles.underHeader}>
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
    }
})