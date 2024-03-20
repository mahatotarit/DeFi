async function getChainId() {
  try {
    const get_network = await window_provider.getNetwork();
    const get_chainId = get_network.chainId;
    return get_chainId;
  } catch (error) {
    console.error('Error getting chain ID:', error);
    return null;
  }
}