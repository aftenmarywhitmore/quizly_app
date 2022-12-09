//IMPORT REQUIRED FROM SQL
const { GraphQLSchema, GraphQLObjectType } = require('graphql')

const mutations = require('./mutations')

// IMPORT QUERIES
const queries = require('./queries')

// DEFINE QUERY TYPE
const QueryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'This type holds all of my liquor.',
    fields: queries
})

// Define MutationType
const MutationType = new GraphQLObjectType({
    name: 'MutationType',
    description: 'This type holds all of my mutations',
    fields: mutations
})

module.exports = new GraphQLSchema({
    query: QueryType,
    mutation: MutationType
})


