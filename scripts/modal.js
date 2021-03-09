// Get the modal
var michelle = document.getElementById("Michelle-Modal");

// Get the button that opens the modal
var michelle_btn = document.getElementById("Michelle");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// var yongspan = document.getElementById("yclose")[0];
// var amyspan = document.getElementById("aclose")[0];
// var kevinspan = document.getElementById("kclose")[0];
// var michaelspan = document.getElementById("miclose")[0];
// var yuspan = document.getElementById("yuclose")[0];
// var gordonspan = document.getElementById("gclose")[0];
// When the user clicks on the button, open the modal

michelle_btn.onclick = function() {
  michelle.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  if (event.target == michelle) {
    michelle.style.display = "none";
  }
  if (event.target == yong) {
    yong.style.display = "none";
  }
  if (event.target == kevin) {
    kevin.style.display = "none";
  }
  if (event.target == amy) {
    amy.style.display = "none";
  }
  if (event.target == yu) {
    yu.style.display = "none";
  }
  if (event.target == michael) {
    michael.style.display = "none";
  }
  if (event.target == gordon) {
    gordon.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == michelle) {
    michelle.style.display = "none";
  }
  if (event.target == yong) {
    yong.style.display = "none";
  }
  if (event.target == kevin) {
    kevin.style.display = "none";
  }
  if (event.target == amy) {
    amy.style.display = "none";
  }
  if (event.target == yu) {
    yu.style.display = "none";
  }
  if (event.target == michael) {
    michael.style.display = "none";
  }
  if (event.target == gordon) {
    gordon.style.display = "none";
  }
}
// Get the modal
var yong = document.getElementById("Yong-Modal");

// Get the button that opens the modal
var yong_btn = document.getElementById("Yong");


// When the user clicks on the button, open the modal
yong_btn.onclick = function() {
  yong.style.display = "block";
}



// Get the modal
var kevin = document.getElementById("Kevin-Modal");

// Get the button that opens the modal
var kevin_btn = document.getElementById("Kevin");


// When the user clicks on the button, open the modal
kevin_btn.onclick = function() {
  kevin.style.display = "block";
}



// Get the modal
var amy = document.getElementById("Amy-Modal");

// Get the button that opens the modal
var amy_btn = document.getElementById("Amy");


// When the user clicks on the button, open the modal
amy_btn.onclick = function() {
  amy.style.display = "block";
}


// Get the modal
var yu = document.getElementById("Yuxuan-Modal");

// Get the button that opens the modal
var yu_btn = document.getElementById("Yuxuan");


// When the user clicks on the button, open the modal
yu_btn.onclick = function() {
  yu.style.display = "block";
}



// Get the modal
var michael = document.getElementById("Michael-Modal");

// Get the button that opens the modal
var michael_btn = document.getElementById("Michael");


// When the user clicks on the button, open the modal
michael_btn.onclick = function() {
  michael.style.display = "block";
}


// Get the modal
var gordon = document.getElementById("Gordon-Modal");

// Get the button that opens the modal
var gordon_btn = document.getElementById("Gordon");


// When the user clicks on the button, open the modal
gordon_btn.onclick = function() {
  gordon.style.display = "block";
}
