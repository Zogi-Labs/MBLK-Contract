require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
// require('@openzeppelin/hardhat-upgrades');
// require("hardhat-gas-reporter");
require('solidity-coverage');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
    compilers: [
      {
        version: "0.8.9",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        }
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
    ]
  },
  // gasReporter: {
  //   currency: 'USD',
  //   gasPrice: 120,
  //   enabled:  true, //(process.env.REPORT_GAS)? true :
  //   ethPrice: 1148.1
  //   // coinmarketcap: "8cab7a0f-7baf-4e90-8c12-39d78eacb364"//process.env.COINMARKETCAP_API_KEY
  // },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
  
    hardhat: {
      allowUnlimitedContractSize: true,
      timeout: 1200000000000000
    },
    // local:{
    //   url: 'http://127.0.0.1:8545/',
    //   accounts: [`${K1}`]
    // },
  
  },
  
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "FG6FG5FQJNTWMD6IUIC5WITIZC8C2ECTHQ"
  }

};
