import { gql } from '@apollo/client';

const GET_COUNTRY = gql`
    query GetCountry{
        countries(filter: { name: { eq: "Andorra" } }){
            name
            capital
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