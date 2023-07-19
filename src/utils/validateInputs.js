const loginRegexp = /^[A-Za-zА-Яа-яіІїЇєЄґҐ'\s-]+$/;
const emailRegexp =
	/^[A-Za-z0-9](?:[A-Za-z0-9.-]*[A-Za-z0-9])?@[A-Za-z0-9.-]+(?:\.[A-Za-z0-9.-_]+)[^-]$/u;
const passwordRegexp = /^(?=.*[0-9])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&*]+$/;

export const loginRules = {
	required: true,
	maxLength: 100,
	minLength: 2,
	pattern: loginRegexp,
};

export const emailRules = {
	required: true,
	maxLength: 63,
	minLength: 6,
	pattern: emailRegexp,
};

export const passwordRules = {
	required: true,
	maxLength: 16,
	minLength: 6,
	pattern: passwordRegexp,
};
