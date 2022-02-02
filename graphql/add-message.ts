import { gql } from "@apollo/client";

export const addNewMessage = gql`
    mutation sendMessage($body:String!, $roomId:String!) {
        sendMessage(body:$body, roomId:$roomId) {
        id
        }
    }`;

