import axios from 'axios'
const url = "http://localhost:4000"

export function registration(registrationData) {

    console.log("\n\n\tIn services for registration --->", registrationData)
    return axios.post(url + "/registration", registrationData)
}

export function login(loginData) { // login component

    console.log("\n\n\tIn service for login--->", loginData)
    return axios.post(url + "/login", loginData)
}

export function emailVerification(verificationToken) { // blank object is for data ... it understands second argument as headers
    console.log("\n\n\tIn services for email verification ", verificationToken)
    return axios.post(url + "/emailVerification", {}, {
        headers: {
            token: verificationToken
        }
    })
}

export function forgetPassword(forgetData) {
    console.log("\n\n\tIN services for forget password API", forgetData)
    return axios.post(url + "/forgetPassword", forgetData)
}

export function resetPassword(resetData, token) {
    console.log("\n\n\tIN services for reset password API", resetData, token)
    return axios.post(url + "/resetPassword", resetData, {
        headers: {
            token: token
        }
    })
}