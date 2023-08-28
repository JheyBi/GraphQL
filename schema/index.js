const query = require('./query');
const type = require('./type');
const mutation = require('./mutation');

const typeDefs = [query, type, mutation];
module.exports = typeDefs;