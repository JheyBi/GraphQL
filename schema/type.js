const {gql} = require('apollo-server-express');

const type = gql`
    type User{
        id: ID!
        name: String!
        email: String!
        active: Boolean!
    }
`;

module.exports = type;