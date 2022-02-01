import { gql } from "@apollo/client";

export const GetMessages = gql`
{
    room (id: "9f16e5cc-8fe4-4c3d-ad09-10530bab3e90") {
        id
        messages {
            id
            body
        }
        name
        user {
        id
    }
    }
    }
`;