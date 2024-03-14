const ethers = require('ethers');


const ethers = require('ethers');

// Connect to MetaMask
async function connectToMetaMask() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const accounts = await provider.listAccounts();
      const address = accounts[0];

      console.log('User Address:', address);
      set_user_wallet_address(address);

    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
    }
  } else {
    console.error('MetaMask is not installed');
  }
}
