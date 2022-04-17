// Get the modal
var modal3 = document.getElementById("createPostM");

// Get the button that opens the modal
var btn3 = document.getElementById("createPost");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btn3.onclick = function () {
  modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
  modal3.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
