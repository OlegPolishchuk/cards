export const EMAIL_RULES = {
    required: 'Email is required',
    pattern: {
        message: 'Enter the correct email',
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    },
};
