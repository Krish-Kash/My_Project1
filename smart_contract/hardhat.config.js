// https://eth-sepolia.g.alchemy.com/v2/k_62s6AP0QFgHjhyyE4aDidJMEKk9Yf4

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/k_62s6AP0QFgHjhyyE4aDidJMEKk9Yf4",
      accounts: ['af3c96d03f6df98de03856b576435d67db7e7adebea27a12deba7cb18eb82e4e'],
    },
  },
};
