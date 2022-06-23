
// HANDLE MODAL
var confirmBooking = document.querySelector(".modal.success-booking-modal");

// Get the button that opens the modal
var confirmBookingBtn = document.querySelector('.confirm-booking')

confirmBookingBtn.addEventListener("click", () => {
   confirmBooking.style.display = "block";
})


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
   if (event.target == confirmBooking) {
      confirmBooking.style.display = "none"
   }
}