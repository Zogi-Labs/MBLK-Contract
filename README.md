## Welcome to the MBLK token project!
This project is built using the Hardhat network and includes an ERC20 token called MBLK.

### Getting Started
To get started, you'll need to have Hardhat installed on your machine. Once you have Hardhat, you can clone this repository and install the dependencies by running:

```npm install```

Compiling and deploying the smart contract
The smart contract for the MBLK token is located in the contracts directory. To compile it, run:

```npx hardhat compile```

To deploy the contract to a local Hardhat network, run:

```npx hardhat run scripts/deployMBLK.js --network [network-name]```

Replace [network-name] with your desired network.

### Interacting with the contract
You can interact with the deployed contract using Hardhat's built-in console. To start the console, run:

```npx hardhat console --network [network-name]```
Once in the console, you can use the following commands to interact with the contract:

1. MBLK.totalSupply() returns the total supply of MBLK tokens

2. MBLK.balanceOf(address) returns the balance of MBLK tokens for a given address

3. MBLK.transfer(address, amount) transfers a specified amount of MBLK tokens from your account to another address

### Additional Resources
Hardhat documentation

ERC20 token standard

We hope you find this project useful! Let us know if you have any questions or feedback.




