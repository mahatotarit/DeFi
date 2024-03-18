async function getChainId() {
  // Connect to MetaMask provider
  try {
    // Get network information
    const get_network = await window_provider.getNetwork();
    const get_chainId = get_network.chainId;

    set_wallet_chainId(get_chainId);
    return get_chainId;
  } catch (error) {
    console.error('Error getting chain ID:', error);
    return null;
  }
}

// Call the function to retrieve the chain ID
getChainId();
