// HANDLE MODAL
var bookCab = document.querySelector(".modal.book-cab-modal");
var bookTrain = document.querySelector(".modal.book-train-modal");
var bookPlane = document.querySelector(".modal.book-flight-modal");

// Get the button that opens the modal
var bookCabBtn = document.querySelector(".book-cab");
var bookFlightBtn = document.querySelector(".book-plane");
var bookTrainBtn = document.querySelector(".book-train");

// When the user clicks on the button, open the modal
bookCabBtn.onclick = function () {
   bookCab.style.display = "block";
}

bookTrainBtn.onclick = function () {
   bookTrain.style.display = "block";
}
bookFlightBtn.onclick = function () {
   bookPlane.style.display = "block";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == bookCab || event.target == bookPlane || event.target == bookTrain) {
      bookCab.style.display = "none";
      bookPlane.style.display = "none";
      bookTrain.style.display = "none";
   }
}