let user_wallet_address;
let user_wallet_chainId;
let network_name = [['Linea', 59144],['Ethereum', 1],['BNB', 56],['Polygon', 137],['Mantle',5000]];

// ============== variable set values functions ======================

// set user wallet address in user_wallet_address variable 
function set_user_wallet_address(user_address){
  user_wallet_address = user_address.trim();
}

// set wallet chain id variable
function set_wallet_chainId(chainid){
  user_wallet_chainId = chainid.trim();
}