const {gql} = require('apollo-server-express');

const query = gql`
    type Query {
        hello: String
        users: [User!]!
        getUserByEmail(email: String!): User!
    }
`;

module.exports = query;