// open from chainlist div
let open_from_chainlist_box_checkbox = document.querySelector('#open_from_chainlist_box',);
let open_form_chainlist_box_div = document.querySelector('#select_from_network_box',);
let select_from_network_box_close_icon = document.querySelector('#select_from_network_box_close_icon',);

open_from_chainlist_box_checkbox.addEventListener('click', function () {
  open_form_chainlist_box_div.classList.add('open_all_type_swap_div_box');
});
select_from_network_box_close_icon.addEventListener('click', function () {
  open_form_chainlist_box_div.classList.remove('open_all_type_swap_div_box');
});

// =================================

// open sepnd token box
let open_spend_box_checkbox = document.querySelector('#spend_input_checkbox');
let open_spend_box_div = document.querySelector('#spend_token_box');
let select_spend_box_close_icon = document.querySelector('#select_token_spend_box_close_icon',);

open_spend_box_checkbox.addEventListener('click', function () {
  open_spend_box_div.classList.add('open_all_type_swap_div_box');
});
select_spend_box_close_icon.addEventListener('click', function () {
  open_spend_box_div.classList.remove('open_all_type_swap_div_box');
});

// open recieve token box

let open_recieve_box_checkbox = document.querySelector('#recieve_input_checkbox',);
let open_recieve_box_div = document.querySelector('#recieve_token_box');
let select_recieve_box_close_icon = document.querySelector('#select_token_recieve_box_close_icon',);

open_recieve_box_checkbox.addEventListener('click', function () {
  open_recieve_box_div.classList.add('open_all_type_swap_div_box');
});
select_recieve_box_close_icon.addEventListener('click', function () {
  open_recieve_box_div.classList.remove('open_all_type_swap_div_box');
});

// =============================================================================
// ==================== token and network change button js =========================
// =============================================================================

let all_network_token_box = document.querySelectorAll('.select_from_network_box',);

// change from network logo
async function change_from_network_logo(network_name) {
  let all_from_network_logo_img =
    document.querySelectorAll('.from_network_logo');

  for (let i = 0; i < all_from_network_logo_img.length; i++) {
    let pre_network_url = all_from_network_logo_img[i].src;
    let filt_network_name = pre_network_url.split('/');
    let pre_network_name = filt_network_name[filt_network_name.length - 1].split('.')[0];

    let new_network_url = pre_network_url.replace( pre_network_name, network_name.toLowerCase());

    try {
      await set_wallet_network("",network_name);
      all_from_network_logo_img[i].src = new_network_url;
    } catch (error) {
      
    }

  }

  all_network_token_box.forEach((element) => {
    element.classList.remove('open_all_type_swap_div_box');
  });
}

// change spend token logo

function change_spend_token_logo(token_name) {
  let all_spend_token = document.querySelectorAll('.spend_token_logo');

  for (let i = 0; i < all_spend_token.length; i++) {
    let pre_token_url = all_spend_token[i].src;
    let filt_token_name = pre_token_url.split('/');
    let pre_token_name = filt_token_name[filt_token_name.length - 1]
      .split('.')[0]
      .toLowerCase();

    let new_token_url = pre_token_url.replace(
      pre_token_name,
      token_name.toLowerCase(),
    );
    all_spend_token[i].src = new_token_url;
  }

  all_network_token_box.forEach((element) => {
    element.classList.remove('open_all_type_swap_div_box');
  });
}

// change recieve token logo
function change_recieve_token_logo(token_name) {
  let all_recieve_token = document.querySelectorAll('.recieve_token_logo');

  for (let i = 0; i < all_recieve_token.length; i++) {
    let pre_token_url = all_recieve_token[i].src;
    let filt_token_name = pre_token_url.split('/');
    let pre_token_name = filt_token_name[filt_token_name.length - 1]
      .split('.')[0]
      .toLowerCase();

    let new_token_url = pre_token_url.replace(
      pre_token_name,
      token_name.toLowerCase(),
    );
    all_recieve_token[i].src = new_token_url;
  }

  all_network_token_box.forEach((element) => {
    element.classList.remove('open_all_type_swap_div_box');
  });
}