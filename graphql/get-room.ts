import { gql } from "@apollo/client";

export const GetRooms = gql`
{
    usersRooms {
        user {
            email
            firstName
            lastName
            id
            role
        }
        rooms {
            id
            name
        }
    }
}
`;