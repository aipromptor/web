import { ApolloClient, InMemoryCache, DocumentNode, gql, OperationVariables, QueryOptions, ApolloQueryResult } from '@apollo/client';

export const gqlClient = new ApolloClient({
    uri: 'https://aipromptor.com/graphql',
    cache: new InMemoryCache(),
});

export class GQLConnector {
    query<T = any>(q: DocumentNode, variables?: Record<string, any>): Promise<ApolloQueryResult<T>> {
        // if (variables != undefined) {
        //     variables["locale"] = localeStore.language;
        // }
        // else {
        //     variables = { "locale": localeStore.language };
        // }

        return gqlClient.query<T>({ query: q, variables: variables });
    }
}