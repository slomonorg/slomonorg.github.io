var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName + "!";
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName + "!";
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/firefox.png') {
    myImage.setAttribute ('src', 'images/firefox2.png');
    myHeading.textContent = 'This is my heading above the T-REX.';
  } else {
    myImage.setAttribute ('src', 'images/firefox.png');
    myHeading.textContent = 'This is my heading above the FOX.';
  }
}

myButton.onclick = function() {
  setUserName();
}
