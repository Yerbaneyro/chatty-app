# chatty-app

## Last Stable Vesion

After solving issue with Sending Button & updatting data from server **current master verison is stable and working great.**

![Preview of chat screen](https://user-images.githubusercontent.com/94953520/152249272-72ae405a-b6c7-48df-a954-296776f4b74c.png)


Chatty  app made with React Native + TS

## Issue with Sending Button & loading messages.

#### Send Button Issue **(SOLVED)**

_In last version of app there is problem with send button. When user try to send a message app not sending anything. Some fixing work at this point should be done._

- [x] **I managed to solve it after time for my task end but its now working well...problem was related to element inside render Composer in Gifted Chat tree. I fix it by importing Composer Class into the file use it in renderComposer instead of TextInput.**


#### Loading Message Issue **(SOLVED)**

Second issue is a problem with loading message data to the room. User have to enter room twice to show the message properly. This is happend because in chat-room.tsx there is the let message variable with empty Array. So its holding last "one step earlier messages" and returnig them back. Should be fixed with useState.

- [x] **Fixed problem by ereasing one component and implementing if statement to useEfect so now it is waiting for data from useQuery and then fetching it to screen. Of course poolInterval work well.**


#### Space betwen message and Input toolbar

I had to use negative bottom offset to solve problem with keyboard that hide input toolbar. It was not possible to send any message so now is funtional...but some not good looking break betwen input toolbar and message bubbles shown when mobile keyboard shows.

#### TypeScript

Code is based on TypeScript but because I am still not very confident with using it I just focused on managing main task problems so I did not type. But i plan to use typing inside this app just for practice.
