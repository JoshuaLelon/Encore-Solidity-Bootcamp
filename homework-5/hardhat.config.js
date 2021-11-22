require("@nomiclabs/hardhat-waffle");
require("hardhat-tracer");
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-etherscan");
require('solidity-coverage');

let secret = require('./secret.json');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// To console.log() in contract use in the contract: import "hardhat/console.sol";

// To test: npx hardhat test

// module.exports = {
//   defaultNetwork: "ganache",
//   networks: {
//     ganache: {
//     // change URL to the URL from your Ganache
//       url: "http://127.0.0.1:7545",
//       gasLimit: 6000000000,
//       defaultBalanceEther: 1000,
//     },
//   },
//   solidity: "0.8.0",
// };


module.exports = {
   solidity: "0.8.0",
   gasReporter: {
    enabled: (process.env.REPORT_GAS) ? true : false
  },
//   networks: {
//     mainnet: { notsure: "not sure what goes here" } // CONFIG ME so that hardhat-etherscan works
//   },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "YOUR_ETHERSCAN_API_KEY"  // CONFIG ME so that hardhat-etherscan works
  },
  networks: { 
    ropsten: { 
      url: secret.url, 
      accounts: [secret.key] 
    } 
  }
};