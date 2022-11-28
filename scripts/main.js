let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/profile_image.PNG') {
    myImage.setAttribute ('src','images/pixel_face.png');
  } else {
    myImage.setAttribute ('src','images/profile_image.PNG');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'welcome to my portfolio, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'welcome back, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
}
