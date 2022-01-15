module.exports = {
  contracts_build_directory: './client/src/contracts',

  networks: {
    development: {
      host: "192.168.1.185",
      port: 21004,
      network_id: "21004", // Match any network id
    },
  },

  compilers: {
    solc: {
      version: "^0.8.7",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  }
};
