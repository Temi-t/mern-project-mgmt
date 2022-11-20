import Header from "./components/Header";
import Clients from "./components/Clients";
import AddClientsModal from "./components/AddClientsModal";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

//CONSOLE WARNING: Cache data may be lost when replacing the clients field of a Query object.
//To address this problem (which is not a bug in Apollo Client), define a
//custom merge function for the Query.clients field, so InMemoryCache can safely merge these objects:
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        projects: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
//InMemoryCache used so clients show right away without reloading the list
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  //cache: new InMemoryCache(),
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <AddClientsModal />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
