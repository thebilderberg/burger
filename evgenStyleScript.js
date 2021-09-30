
function incButton(inc_b, inc_m) {
    let button_inc = document.querySelector(inc_b);
    button_inc.addEventListener('click', () => {
        let window_inc = document.querySelector(inc_m);
        if (window_inc.classList.contains("hide")) {
            window_inc.classList.remove("hide");
        } else {
            window_inc.classList.add("hide");
        }
    });
}

incButton('.burgerButton', '.incognitoMenu');
incButton('.cheezBurgerButton', '.cheezBurgerInfo');


