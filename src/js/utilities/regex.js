const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

const isValidEmail = (email) => {
    if (!email) {
        return false
    }

    return EMAIL_PATTERN.test(email)
}

export { EMAIL_PATTERN, isValidEmail }
