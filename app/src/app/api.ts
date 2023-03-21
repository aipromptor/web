import { ApolloClient, InMemoryCache } from '@apollo/client';

export const gqlClient = new ApolloClient({
    uri: 'https://aipromptor.com/graphql',
    cache: new InMemoryCache(),
});