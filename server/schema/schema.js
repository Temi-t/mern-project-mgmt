//const { projects, clients } = require("../sampleData.js");
//Mongoose models
const Project = require("../models/Project.js");
const Client = require("../models/Client.js");
//GraphQL Types§
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");
//const { modelNames } = require("mongoose");

//Project Type
const ProjectType = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve(parent, args) {
        //return clients.find((client) => client.id === parent.clientId); //------from sampleData
        return Client.findById(parent.clientId);
      },
    },
  }),
});

//Client Type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

//root query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    projects: {
      type: GraphQLList(ProjectType),
      resolve(parent, args) {
        //return projects       //------from sampleData
        return Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } }, //------args = project.id
      resolve(parent, args) {
        //return projects.find((project) => project.id === args.id); //------response returned to find a specific project
        return Project.findById(args.id);
      },
    },

    clients: {
      type: GraphQLList(ClientType),
      resolve(parent, args) {
        //return clients;
        return Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } }, //------args = client.id
      resolve(parent, args) {
        //return clients.find((client) => client.id === args.id); //------response returned to find a specific client
        return Client.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
