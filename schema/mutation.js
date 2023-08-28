const {gql} = require('apollo-server-express');

const mutation = gql`
    type Mutation {
        createUser(name: String!, email: String!): User!
        updateUser(name: String!, email: String!): User!
        deleteUser(name: String!): User!
    }
`;

module.exports = mutation;