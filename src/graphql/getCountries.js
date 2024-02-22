import { gql } from '@apollo/client';

const GET_COUNTRIES = gql`
    query getCountries($nameToSearch: String!){
        countries(filter: { name: { regex: $nameToSearch } }){
            name
            capital
            continent{
                name
            }
        }
    }
`
export default GET_COUNTRIES;