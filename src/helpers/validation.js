const emptyFieldError = 'поле не может быть пустым';
const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const phoneRegex = new RegExp(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/);

export const emailValidation = (email) => {
  if (emailRegex.test(email)) {
    return null;
  }
  if (email.trim() === '') {
    return emptyFieldError;
  }

  return 'введите корректный email';
};

export const passwordValidation = (password) => {
  const trimedEmail = password.trim();
  if (trimedEmail.length >= 8) {
    return null;
  }

  if (trimedEmail === '') {
    return emptyFieldError;
  }

  return 'пароль должен содержать не менее 8 символов';
};

export const phoneValidation = (phone) => {
  if (phoneRegex.test(phone)) {
    return null;
  }

  if (phone.trim() === '') {
    return emptyFieldError;
  }

  return 'введите корректный телефон';
}

export const fieldValidation = (value) => value.trim() === '' ? emptyFieldError : null;