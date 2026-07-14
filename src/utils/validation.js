export const isValidName = (name) => name.length > 3;

export const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

export const isValidSubj = (name) => name.length > 3;

export const isValidMessage = (message) => message >= 1 && message <= 500 && message !== '';