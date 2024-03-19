// set user wallet address in user_wallet_address variable
function set_user_wallet_address(user_address) {
  user_wallet_address = user_address.trim();
}

// set wallet chain id variable
async function set_wallet_network(chainid, chainname) {
  if (selected_network[0].toLowerCase() == chainname.toLowerCase() ||selected_network[1] == chainid) 
  {
    return;
  }

  async function switch_network(chainid) {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainid }],
      });
    } catch (error) {
      console.log(error);
    }
  }

  for (let i = 0; i < network_name.length; i++) {
    
    let check_only_network = false;

    if (!check_only_network && chainid != network_name[0][1]) {
      switch_network('0xe708');
    }

  }
}
