import { ApolloClient, InMemoryCache } from '@apollo/client';

export const host = "https://aipromptor.com";

export const gqlClient = new ApolloClient({
    uri: `${host}/graphql`,
    cache: new InMemoryCache(),
});