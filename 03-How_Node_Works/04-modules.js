console.log(arguments);

// returns

// {
//     '0': {},
//     '1': [Function: require] {
//       resolve: [Function: resolve] { paths: [Function: paths] },
//       main: Module {
//         id: '.',
//         path: '/Users/akash/Learnings/NodeJs-Concepts-Everything/03-How_Node_Works',
//         exports: {},
//         filename: '/Users/akash/Learnings/NodeJs-Concepts-Everything/03-How_Node_Works/04-modules.js',
//         loaded: false,
//         children: [],
//         paths: [Array]
//       },
//       extensions: [Object: null prototype] {
//         '.js': [Function (anonymous)],
//         '.json': [Function (anonymous)],
//         '.node': [Function (anonymous)]
//       },
//       cache: [Object: null prototype] {
//         '/Users/akash/Learnings/NodeJs-Concepts-Everything/03-How_Node_Works/04-modules.js': [Module]
//       }
//     },
//     '2': Module {
//       id: '.',
//       path: '/Users/akash/Learnings/NodeJs-Concepts-Everything/03-How_Node_Works',
//       exports: {},
//       filename: '/Users/akash/Learnings/NodeJs-Concepts-Everything/03-How_Node_Works/04-modules.js',
//       loaded: false,
//       children: [],
//       paths: [
//         '/Users/akash/Learnings/NodeJs-Concepts-Everything/03-How_Node_Works/node_modules',
//         '/Users/akash/Learnings/NodeJs-Concepts-Everything/node_modules',
//         '/Users/akash/Learnings/node_modules',
//         '/Users/akash/node_modules',
//         '/Users/node_modules',
//         '/node_modules'
//       ]
//     },
//     '3': '/Users/akash/Learnings/NodeJs-Concepts-Everything/03-How_Node_Works/04-modules.js',
//     '4': '/Users/akash/Learnings/NodeJs-Concepts-Everything/03-How_Node_Works'
//   }

// This proves all the code in our module is wrapped inside a function whose arguments are printed above
