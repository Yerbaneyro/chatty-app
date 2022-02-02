# chatty-app

![alt text](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngfind.com%2Fmpng%2FhowhbRx_horde-technology-react-native-logo-hd-png-download%2F&psig=AOvVaw0VL5dvhQgNCBwl-wOPzXFF&ust=1643918781397000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLCM7uvo4fUCFQAAAAAdAAAAABAf)

## Issue with Sending Button & loading messages.

#### Send Button Issue

In last version of app there is problem with send button. When user try to send a message it will not sending anything. Some fixing work at this point should be done.

#### Loading Message Issue

Second issue is a problem with loading message data to the room. User have to enter room twice to show the message properly. This is happend because in chat-room.tsx there is the let message variable with empty Array. So its holding last "one step earlier messages" and returnig them back. Should be fixed with useState.

#### Space betwen message and Input toolbar

I had to use negative bottom offset to solve problem with keyboard that hide input toolbar. It was not possible to send any message so now is funtional...but some not good looking break betwen input toolbar and message bubbles shown when mobile keyboard shows.

## Last Working Vesion

It is a commit with title: Current User Data


Chatty  app made with React Native + TS
