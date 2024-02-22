import Country from "../components/Country"

const Home = () => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8 md:p-12">
            <Country></Country>
        </div>
    )
}

export default Home