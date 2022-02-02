import { gql } from "@apollo/client";

export default function GetMessages(id) {

    return (
        gql`
        {
            room (id: "${id}" ) {
                id
                messages {
                    id
                    body
                    insertedAt
                }
                name
                user {
                id
            }
            }
            }
        `)
}