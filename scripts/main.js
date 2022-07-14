let myImage = document.querySelector('img');

// setInterval(() => {
//     let mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/solo-leveling.jpeg') {
//       myImage.setAttribute('src','images/solo-leveling2.jpeg');
//     } else {
//       myImage.setAttribute('src','images/solo-leveling.jpeg');
//     }
// }, 2000);

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/solo-leveling.jpeg') {
      myImage.setAttribute('src','images/solo-leveling2.jpeg');
    } else {
      myImage.setAttribute('src','images/solo-leveling.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Solo Leveling is the best manga!\nIsn\'t it ' + myName + ' ?';
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Solo Leveling is the best manga!\nIsn\'t it ' + storedName + ' ?';
}

myButton.onclick = () => {setUserName();}
