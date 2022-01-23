const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');


let ejeX = 0;
let ejeY = 0;

const random = (num) => {

    let numRandom = Math.floor(Math.random() * (48 - 20)) + 20;

    const numNegative = Math.floor(Math.random() * 2) * 1;

    if (numNegative > 0) {
        numRandom *= -1;
        console.log(numRandom);
    }

    num = numRandom;



    return num;
}


const moveBtn = () => {

    ejeX = random(ejeX);
    ejeY = random(ejeY);
    let widthBtn = 98;
    let heightBtn = 71;

    ejeX > 0 ? null : widthBtn *= -1;
    ejeY > 0 ? null : heightBtn *= -1;


    noBtn.style.transform = `
    translate(calc(${ejeX}vw - ${widthBtn}px), calc(${ejeY}vh - ${heightBtn}px)`
    console.log(ejeX, ejeY);
}

const popUp = () => {

    const container = document.getElementsByTagName('main')[0];
    const element = document.createElement('div');
    element.classList.add('popUp');
    element.addEventListener('click', function () {
        element.style.display = 'none';
    })
    element.innerHTML = `
        <p>¡Gracias, ya estamos casados 12 veces!</p>
    `;

    container.appendChild(element);

}

noBtn.addEventListener('click', moveBtn);
noBtn.addEventListener('mouseover', moveBtn);
yesBtn.addEventListener('click', popUp);



