// import React from "react";
// import { graphql } from "react-apollo";
// import { gql } from "apollo-boost";

import React from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

// const POPULAR_REPOSITORIES_LIST = gql`
//   {
//     search(query: "stars:>50000", type: REPOSITORY, first: 10) {
//       repositoryCount
//       edges {
//         node {
//           ... on Repository {
//             name
//             owner {
//               login
//             }
//             stargazers {
//               totalCount
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// const App = graphql(POPULAR_REPOSITORIES_LIST)(props => (
//   <ul>
//     {props.data.loading
//       ? ""
//       : props.data.search.edges.map((row, i) => (
//           <li key={`${row.node.owner.login}-${row.node.name}`}>
//             {row.node.owner.login} / {row.node.name}:{" "}
//             <strong>{row.node.stargazers.totalCount}</strong>
//           </li>
//         ))}
//   </ul>
// ));

const App = () => (
  <Query
    query={gql`
      {
        hello(msg: "Adrian")
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      return data.hello;
    }}
  </Query>
);
export default App;
