
import { useQuery, gql } from "@apollo/client"
// import GET_COUNTRIES from "../graphql/getCountries.graphql"


const GET_COUNTRIES2 = gql`
    query countries{
        countries{
            name
            capital
        }
    }
`;

const Country = () => {

    const {data, error, loading} = useQuery(GET_COUNTRIES2);

    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    // console.log(data)
    return (
        <div>
            {data.countries.map((country) => (
                <p key={country.name} className="bg-green-500">{country.name}</p>
            ))}
        </div>
    )
}



export default Country