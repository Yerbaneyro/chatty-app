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
                    user {
                        id
                        firstName
                    }
                }
                name
                user {
                id
            }
            }
            }
        `)
}