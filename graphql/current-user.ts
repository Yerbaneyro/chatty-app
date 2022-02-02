import { gql } from "@apollo/client"


export const currentUser = gql`
{
    user{
        email
        id
        role
        firstName
        lastName
    }
}`