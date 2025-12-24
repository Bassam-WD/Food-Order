
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


const validators = {
    text: {
        fn: validName,
        message: 'Name must contain only letters and at least 3 characters',
    },
    name: {
        fn: validName,
        message: 'Name must contain only letters and at least 3 characters',
    },
    email: {
        fn: validEmail,
        message: 'Please enter a valid email address.'
    },
    password: {
        fn: validPassword,
        message: 'Password must include letters and numbers,least 8 characters'
    },

    phone: {
        fn: validPhoneNumber,
        message: 'Please enter a valid phone number.'
    },

    postal: {
        fn: ValidpostalNumber,
        message: 'Please enter a valid phone number.'
    }

}

export default function validation(type, value) {
    if (!validators[type].fn(value)) {
        return validators[type].message
    } else {
        return false
    }


}