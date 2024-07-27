const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');
module.exports = withModuleFederationPlugin({
  
  library: { type: 'module' },

  
  name: 'remoteapp',

  exposes: {
    // './Component': './src/app/app.component.ts',
    './RemoteAppModule': './src/app/remote-app/remote-app.module.ts'
  },
 
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
  
});


//  module.exports.output.scriptType = "text/javascript"



// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// const path = require("path");
// const share = mf.share;

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, 'tsconfig.json'),
//   [/* mapped paths to share */]);
// module.exports = {
//   output: {
//     uniqueName: "remoteapp",
//     publicPath: "auto",
//     scriptType:"text/javascript"
//   },
//   optimization: {
//     runtimeChunk: false
//   },   
//   resolve: {
//     alias: {
//       ...sharedMappings.getAliases(),
//     }
//   },
//   experiments: {
//     outputModule: true
//   },
//   plugins: [
//     new ModuleFederationPlugin({
//         library: { type: "module" },

//         // For remotes (please adjust)
//         // name: "hostapp",
//         // filename: "remoteEntry.js",
//         // exposes: {
//         //     './Component': './/src/app/app.component.ts',
//         // },        
        
//         // For hosts (please adjust)
//         // remotes: {
//         //     "remoteapp": "remoteapp@http://localhost:5200/remoteEntry.js",

//         // },

//         name: 'remoteapp',
//         filename: "remoteEntry.js",
//         exposes: {
//           // './Component': './src/app/app.component.ts',
//           './RemoteAppModule': './src/app/remote-app/remote-app.module.ts'
//         },

//         shared: share({
//           "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
//           "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
//           "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' }, 
//           "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },

//           ...sharedMappings.getDescriptors()
//         })
        
//     }),
//     sharedMappings.getPlugin()
//   ],
// };