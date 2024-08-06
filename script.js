const form = document.getElementById('form');
const errorMessageElement = document.getElementById('error-message');
const emailInput = document.getElementById('email');
const successMsg = document.getElementById('success-msg');
const dismissSuccessMsg = document.getElementById('dismiss-success-msg');
const successEmail = document.getElementById('success__email');

function handleFormSubmit(e) {
  // Prevent default browser behaviour
  e.preventDefault();

  // Retrieving data from the form
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  // Extract email from form data
  const email = data.email;

  // Error message
  const errorMessage = validateEmail(email);

  if (errorMessage) {
    errorMessageElement.innerText = errorMessage;
    emailInput.classList.add('error');
  } else {
    successMsg.showModal();
    successEmail.innerText = email;
  }
}

// Dismiss success message
dismissSuccessMsg.addEventListener('click', () => {
  successMsg.close();
  errorMessageElement.innerText = '';
  emailInput.value = '';
  emailInput.classList.remove('error');
});

// Validate email
function validateEmail(email) {
  const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!email) {
    return 'Valid email required';
  } else if (!isValidEmail.test(email)) {
    return 'Valid email required';
  } else {
    return '';
  }
}

form.addEventListener('submit', handleFormSubmit);
