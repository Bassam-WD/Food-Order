export function validEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}
export function validPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    return passwordRegex.test(password)
}
export function confirmPassword(password, confirmPassword) {
    return password === confirmPassword
}

export function validName(name) {
    const nameRegex = /^[A-Za-z\u0600-\u06FF ]{2,}$/;
    return nameRegex.test(name)
}
export function validPhoneNumber(phoneNumber) {
    const egyptPhoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
    return egyptPhoneRegex.test(phoneNumber)
}
export function ValidpostalNumber(postalNumber) {
    const egyptPostalCodeRegex = /^\d{5}$/;
    return egyptPostalCodeRegex.test(postalNumber)
}


export default function validation(type, value) {
    if (type === 'name' || type === 'text') {
        return !validName(value) && ' must contain only letters and least 3 characters'
    }

    if (type === 'email') {
        return !validEmail(value) && 'Please enter a valid email address.'
    }

    if (type === 'password') {
        return !validPassword(value) && 'Password must include letters and numbers,least 8 characters'
    }

    if (type === 'phone') {
        return !validPhoneNumber(value) && 'Please enter a valid phone number.'
    }

    if (type === 'postal') {
        return !ValidpostalNumber(value) && '"Postal code must be 5 digits"'
    }



}