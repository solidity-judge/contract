import { gql } from 'graphql-request';

export const USERS_QUERY = gql`
    query Users($limit: Int!, $skip: Int!) {
        data: users(first: $limit, orderBy: syncingIndex, where: { syncingIndex_gt: $skip }) {
            gate
            username: id
            address: user
        }
    }
`;

export type UserDto = {
    gate: string;
    username: string;
    address: string;
};
