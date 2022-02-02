# chatty-app

## Last Stable Vesion

After solving issue with Sending Button **current master verison is stable.**


Chatty  app made with React Native + TS

## Issue with Sending Button & loading messages.

#### Send Button Issue **(SOLVED)**

_In last version of app there is problem with send button. When user try to send a message it will not sending anything. Some fixing work at this point should be done._

- [x] **I managed to solve it after time for my task end but its now working well...problem was related to element inside renderComposer in Gifted Chat tree. I fix it by importing Composer Class into the file use it in renderComposer instead of TextInput.**


#### Loading Message Issue

Second issue is a problem with loading message data to the room. User have to enter room twice to show the message properly. This is happend because in chat-room.tsx there is the let message variable with empty Array. So its holding last "one step earlier messages" and returnig them back. Should be fixed with useState.

#### Space betwen message and Input toolbar

I had to use negative bottom offset to solve problem with keyboard that hide input toolbar. It was not possible to send any message so now is funtional...but some not good looking break betwen input toolbar and message bubbles shown when mobile keyboard shows.


