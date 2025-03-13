const signupButton = document.getElementById('signupButton');
const signupPopup = document.getElementById('signupPopup');
const closeButton = document.querySelector('.close-button');
const signupForm = document.getElementById('signupForm');

signupButton.addEventListener('click', () => {
  signupPopup.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
    signupPopup.style.display = 'block';
});