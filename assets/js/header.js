let open_wallet_connet_button = document.querySelector('.open_wallet_connet_button');
let open_wallet_connet_button_p = document.querySelector('#wallet_address_button_text',);
let disconnect_wallet_div = document.querySelector('#disconnect_wallet_div');
let wallet_connect_modal = document.querySelector('.wallet_connect_modal');

// open wallet connect box and check if allready connected
function open_wallet_cunnect_box() {
    let button_inner_text = open_wallet_connet_button_p.innerText;
    if (button_inner_text.toString().length == 11){
        disconnect_wallet_div.classList.toggle('d-none');
    }else if ('Connect' == button_inner_text.toString() ||'connect' == button_inner_text.toString()) {
      wallet_connect_modal.classList.add('open_wallet_connect_box');
    }
}
open_wallet_connet_button.addEventListener('click', open_wallet_cunnect_box);


// close wallet connect box funciton
function close_wallet_connect_box_fun(){

    wallet_connect_modal.classList.remove('open_wallet_connect_box');

    let all_spinner = document.querySelectorAll('.connect_loading');
    all_spinner.forEach(element => {
        element.classList.add('d-none');
    });
}