function validateEmail(email) {
    // This regex checks for a valid email address
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Example usage:
const email = "example@example.com";
console.log(validateEmail(email));  // Output: true or false depending on the validity of the email
