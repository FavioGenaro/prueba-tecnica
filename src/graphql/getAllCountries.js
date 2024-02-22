import { gql } from '@apollo/client';

const GET_ALL_COUNTRIES = gql`
    query allCountries{
        countries{
            name
            capital
            continent{
                name
            }
        }
    }
`;


export default GET_ALL_COUNTRIES;
