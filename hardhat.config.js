require("@nomiclabs/hardhat-waffle");

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

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
};

// module.exports = {
//   defaultNetwork: "hardhat",
//   paths: {
//     artifacts: './src/artifacts',
//   },
//   networks: {
//     hardhat: {},
//     ropsten: {
//       url: "https://ropsten.infura.io/v3/your-project-id",
//       accounts: [`0x${your-private-key}`]
//     }
//   },
//   solidity: "0.8.4",
// };
