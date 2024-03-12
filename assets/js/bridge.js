// open from chainlist div
let open_from_chainlist_box_checkbox = document.querySelector('#open_from_chainlist_box');
let open_form_chainlist_box_div = document.querySelector('#select_from_network_box');
let select_from_network_box_close_icon = document.querySelector('#select_from_network_box_close_icon');

open_from_chainlist_box_checkbox.addEventListener('click', function () {
    open_form_chainlist_box_div.classList.add('open_all_type_bridge_div_box');
});
select_from_network_box_close_icon.addEventListener('click', function () {
  open_form_chainlist_box_div.classList.remove('open_all_type_bridge_div_box');
});

// open to chainlist div
let open_to_chainlist_box_checkbox = document.querySelector('#open_to_chainlist_box');
let open_to_chainlist_box_div = document.querySelector('#select_to_network_box');
let select_to_network_box_close_icon = document.querySelector('#select_from_network_box_close_icon');

open_to_chainlist_box_checkbox.addEventListener('click', function () {
  open_form_chainlist_box_div.classList.add('open_all_type_bridge_div_box');
});
select_to_network_box_close_icon.addEventListener('click', function () {
  open_form_chainlist_box_div.classList.remove('open_all_type_bridge_div_box');
});


// =================================

// open sepnd token box 
let open_spend_box_checkbox = document.querySelector('#spend_input_checkbox');
let open_spend_box_div = document.querySelector('#spend_token_box');
let select_spend_box_close_icon = document.querySelector('#select_token_spend_box_close_icon');

open_spend_box_checkbox.addEventListener('click', function () {
    open_spend_box_div.classList.add('open_all_type_bridge_div_box');
});
select_spend_box_close_icon.addEventListener('click', function () {
  open_spend_box_div.classList.remove('open_all_type_bridge_div_box');
});

// open recieve token box 

let open_recieve_box_checkbox = document.querySelector('#recieve_input_checkbox');
let open_recieve_box_div = document.querySelector('#recieve_token_box');
let select_recieve_box_close_icon = document.querySelector(
  '#select_token_recieve_box_close_icon',
);

open_recieve_box_checkbox.addEventListener('click', function () {
  open_recieve_box_div.classList.add('open_all_type_bridge_div_box');
});
select_recieve_box_close_icon.addEventListener('click', function () {
  open_recieve_box_div.classList.remove('open_all_type_bridge_div_box');
});
