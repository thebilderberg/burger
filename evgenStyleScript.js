

function incMenu(inc_m) {
    let window = document.querySelector(inc_m);
    window.hidden = true;
}

function incButton(inc_b, inc_m) {
    let button_inc = document.querySelector(inc_b);
    button_inc.addEventListener('click', () => {
        let window_inc = document.querySelector(inc_m);
        if (window_inc.hidden === true) {
            window_inc.hidden = false;
        } else {
            window_inc.hidden = true;
        }
    });
}

incMenu('.incognitoMenu');
incButton('.burgerButton', '.incognitoMenu');
incMenu('.cheezBurgerInfo');
incButton('.cheezBurgerButton', '.cheezBurgerInfo');