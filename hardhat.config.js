require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config;

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://quick-muddy-friday.ethereum-goerli.discover.quiknode.pro/991b68f92b6b8c2a3ae2cbcc2dc90a57e075e5eb/', 
      accounts: ['5c314063396b5549ac6a598bf7e790ef20aeb931c08e0a1b2f54b88ead79a643'], 
    }, 
    mainnet: {
      url: '', 
      accounts: ['5c314063396b5549ac6a598bf7e790ef20aeb931c08e0a1b2f54b88ead79a643'], 
    }, 
  }, 
};