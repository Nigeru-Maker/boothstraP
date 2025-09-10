document.getElementById("bookBtn").addEventListener("click", function () {
  let bookingModal = new bootstrap.Modal(document.getElementById("bookingModal"));
  bookingModal.show();
});

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us! We’ll get back to you soon.");
});
