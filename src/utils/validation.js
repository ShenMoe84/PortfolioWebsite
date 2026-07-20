export const isValidName = (name) => name.length > 3;

export const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);

export const isValidSubj = (subj) => subj.length > 3;