import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { defineConfig, loadEnv } from 'vite'

// const env = loadEnv(mode, process.cwd())
// import.meta.env.VITE_REACT_APP_GRAPHQL
const client = new ApolloClient({
    uri: "https://countries.trevorblades.com",
    cache: new InMemoryCache()
})

export default client;
