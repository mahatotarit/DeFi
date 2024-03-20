// set user wallet address in user_wallet_address variable
function set_user_wallet_address(user_address) {
  user_wallet_address = user_address.trim();
}

// set wallet chain id variable
async function set_wallet_network(chainid, chainname) {

  async function switch_network() {
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: selected_network[2].toString() }],
      });
      if (chainname.toLowerCase() != selected_network[0].toLowerCase()) {
        change_from_network_logo(selected_network[0]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  for (let i = 0; i < network_name.length; i++) {
    if(chainid != "" || chainid != undefined || chainid != null){
      if(chainid == network_name[i][1]){
        selected_network = network_name[i];
        await switch_network();
        break;
      }
    }
    if(chainname != "" || chainname != undefined || chainname != null){
      if(chainname.toLowerCase() == network_name[i][0].toLowerCase()){
        selected_network = network_name[i];
        await switch_network();
        break;
      }
    }
  }

}