let connect_spinner;

// disconnect wallet function
function disconnect_wallet(ele) {
  let wallet_connect_button = document.querySelector(
    '#wallet_address_button_text',
  );
  let wallet_connect_button_icon = document.querySelector(
    '#wallet_connect_btn_icon',
  );

  wallet_connect_button.innerText = 'Connect';
  wallet_connect_button_icon.classList.remove('d-none');
  ele.classList.add('d-none');
  set_user_wallet_address('');
}

// spinner action
function spinner_action(action, ele) {
  if (action == 'open' || action == 'OPEN') {
    ele.classList.remove('d-none');
  } else {
    ele.classList.add('d-none');
  }
}

// set address in button
function set_address_in_connect_button(user_address) {
  let wallet_connect_button = document.querySelector(
    '#wallet_address_button_text',
  );
  let wallet_connect_button_icon = document.querySelector(
    '#wallet_connect_btn_icon',
  );
  const address = user_address.toString();
  const firstFour_wa_dig = address.substring(0, 4);
  const lastFour_wa_dig = address.substring(address.length - 4);
  wallet_connect_button.innerText = firstFour_wa_dig + '...' + lastFour_wa_dig;

  wallet_connect_button_icon.classList.add('d-none');
  spinner_action('close', connect_spinner);

  let wallet_connect_modal = document.querySelector('.wallet_connect_modal');
  wallet_connect_modal.classList.remove('open_wallet_connect_box');
}

// connect metamask function
function connect_metamask_wallet(li) {
  connect_spinner = li.querySelector('.connect_loading');
  spinner_action('open', connect_spinner);

  if (typeof window.ethereum !== 'undefined') {
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then((accounts) => {
        const selectedAccount = accounts[0];
        set_user_wallet_address(selectedAccount);
        getChainId();
        set_address_in_connect_button(selectedAccount);
      })
      .catch((error) => {
        if (error.code == 4001) {
          alert('user denied to connect wallet address');
        } spinner_action('close', connect_spinner);
      });
  } else {
    spinner_action('close', connect_spinner);
    console.log('MetaMask is not installed. Please install it to connect.');
  }
}
