// Get the modal
var modal3 = document.getElementById("dltModal");

// When the user clicks on the button, open the modal
function display() {
  modal3.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
function closing() {
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
