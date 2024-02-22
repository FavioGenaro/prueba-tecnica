import { gql } from '@apollo/client';

const GET_COUNTRY = gql`
    query getCountry($name : String!){
        countries(filter: { name: { eq: $name } }){
            name
            capital
            continent{
                name
            }
            languages {
                name
            }
            
            currencies
            states {
                name
            }
        }
    }
`
export default GET_COUNTRY;