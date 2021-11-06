
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


function cofe(info_b) {
    let button_burgerInfo = document.querySelector(info_b);
    button_burgerInfo.addEventListener('click', ()=> {
        let enterName = prompt(`Как тебя зовут?`);
        name = enterName;


        let enterMeat = prompt(`${name}, какое мясо ты любишь?`);
        let enterWay = prompt(`${name}, холодное или горячее?`)
        let meat = enterMeat;
        let way = enterWay;
        let x = undefined;
        let y = undefined;


        if (meat === 'Курица') {
            x = 1;
        } if (meat === 'Свинина') {
            x = 4;
        } if (meat === 'Говядина'){
            x = 6;
        }


        if (way === 'Холодное') {
            y = 1;
        } if (way === 'Горячее') {
            y = 2;
        }

        let answer = x + y;
        if (answer === 2) {
            alert(`${name}, для вас Куриный салат` + `\u{1F60D}`);
        }
        else if (answer === 3){
            alert(`${name}, для вас Куриный суп` + `\u{1F60D}`);
        }
        else if (answer === 5){
            alert(`${name}, для вас салат из свинины` + `\u{1F60D}`);
        }
        else if (answer === 6){
            alert(`${name}, для вас мясо по-французски` + `\u{1F60D}`);
        }
        else if (answer === 7){
            alert(`${name}, для вас язык на тарелке` + `\u{1F60D}`);
        }
        else if (answer === 8){
            alert(`${name}, для вас горячее ассорти из говядины` + `\u{1F60D}`);
        } else {
            alert(`${name}, такого нет в меню ` + `\u{1F60D}`);
        }
    });
}

function footerClick(foo_b) {
    let footerButton = document.querySelector(foo_b);
    footerButton.addEventListener('click', ()=>{
        let div = document.createElement('div');
        div.className = 'alert';
        div.innerHTML = '<div style="text-align: center; position: absolute; top: 1090px; left: 20px;"><input style="height: 100px; width: 300px;" type="password" name="pass" placeholder="password"><button style="height: 100px; width: 50px;">Enter</button></input></div>';
        let container = document.querySelector('footer');
        container.before(div);
    });
}



function footerMatrix (foo_b){
    let foot_but = document.querySelector(foo_b);
    foot_but.addEventListener('mousemove', (event)=> {
    foot_but.innerHTML = `${event.clientX} <br><br> ${event.clientY}`;
  });
}



function footerOther (foo_b){
    let foot_but = document.querySelector(foo_b);
    foot_but.addEventListener('mousemove', (event)=> {
    if (event.clientX <= 20) {
        foot_but.style.cssText = 'background-color: red; transition: 0.5s ease-out';
     } else if (event.clientX <= 30) {
        foot_but.style.cssText = 'background-color: green; transition: 0.5s ease-out';
     } else if (event.clientX <= 40) {
        foot_but.style.cssText = 'background-color: blue; transition: 0.5s ease-out';
     } else if (event.clientX <= 60) {
        foot_but.style.cssText = 'background-color: yellow; transition: 0.5s ease-out';
     } else if (event.clientX <= 200) {
         foot_but.style.cssText = 'background-color: orange; transition: 0.5s ease-out';
      } else if (event.clientX <= 220) {
         foot_but.style.cssText = 'background-color: #e33262; transition: 0.5s ease-out';
      } else if (event.clientX <= 230) {
         foot_but.style.cssText = 'background-color: #51df40; transition: 0.5s ease-out';
      } else {
         foot_but.style.cssText = 'background-color: #7f10db; transition: 0.5s ease-out';
      }
  });
}




incButton('.burgerButton', '.burger');
incButton('.cheezBurgerButton', '.cheezBurgerInfo');
cofe('.burgerInfoButton');
footerClick('.footerButton');
footerMatrix('.footerButton');
footerOther('.burgerButton');
