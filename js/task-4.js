const loginForm = document.querySelector('form.login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const formValue = {};
  formData.forEach((value, key) => {
    formValue[key] = value.trim();
  });

  const { email, password } = formValue;
  if (email === '' || password === '') {
    alert('All form fields must be filled in');
  } else {
    console.log('Form submitted successfully');
  }
  loginForm.reset();
});
