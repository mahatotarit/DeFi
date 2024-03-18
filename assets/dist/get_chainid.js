async function getChainId() {
  try {
    const get_network = await window_provider.getNetwork();
    const get_chainId = get_network.chainId;

    set_wallet_network(get_chainId);
    return get_chainId;
  } catch (error) {
    console.error('Error getting chain ID:', error);
    return null;
  }
}

getChainId();

window_provider.on('network', (newNetwork, oldNetwork) => {
  if (oldNetwork) {
    console.log('Chain changed:', oldNetwork.chainId, '=>', newNetwork.chainId);
  }
});