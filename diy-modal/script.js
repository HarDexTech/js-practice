// Enable strict mode for safer JavaScript execution
'use strict';

// Select all buttons that trigger the modal to open
const showModal = document.querySelectorAll('.show-modal');
// Select the close button inside the modal
const closeModal = document.querySelector('.close-modal');
// Select the modal container
const modal = document.querySelector('.modal');
// Select the overlay (background dimming element)
const overlay = document.querySelector('.overlay');
// Select the body element for keyboard event listeners
const body = document.querySelector('body');

// Function to display the modal by removing the 'hidden' class
function ShowModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

//method 1 to show modal - using traditional for loop with direct class manipulation
// for (let i = 0; i < showModal.length; i++) {
//   showModal[i].addEventListener('click', function () {
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
//   });
// }

//method 2 to show modal - using for loop with function reference
// for (let i = 0; i < showModal.length; i++) {
//   showModal[i].addEventListener('click', ShowModal);
// }

//method 3 to show modal - using forEach with regular function
// showModal.forEach(function (btn) {
//   btn.addEventListener('click', ShowModal);
// });

// Active method 4: using forEach with arrow function for cleaner syntax
showModal.forEach(btn => btn.addEventListener('click', ShowModal));

// Function to hide the modal by adding the 'hidden' class
function CloseModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

// Close modal when the close button is clicked
closeModal.addEventListener('click', CloseModal);
// Close modal when the overlay is clicked
overlay.addEventListener('click', CloseModal);

// Event handler function that closes modal when Escape key is pressed
function escKey(e) {
  if (e.key === 'Escape') {
    CloseModal();
  }
}

// Listen for keyup events on the body to detect Escape key press
body.addEventListener('keyup', escKey);
