let user_wallet_address;
let network_name = [['Linea', 59144],['Ethereum', 1],['BNB', 56],['Polygon', 137],['Mantle',5000]];
let selected_network = [];

// ============== variable set values functions ======================

// set user wallet address in user_wallet_address variable 
function set_user_wallet_address(user_address){
  user_wallet_address = user_address.trim();
}

// set wallet chain id variable
function set_wallet_network(chainid){
  for (let i = 0; i < network_name.length; i++) {
      if(network_name[i][1] == chainid){
        selected_network = network_name[i];
      }
  }

  console.log(selected_network);
}