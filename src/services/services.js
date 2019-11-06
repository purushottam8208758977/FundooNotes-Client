import axios from 'axios'
const url = "http://localhost:3000"
const authenticationToken = localStorage.getItem('token')

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
    console.log("\n\n\tIn services for forget password API", forgetData)
    return axios.post(url + "/forgetPassword", forgetData)
}

//post requires all the three arguments to be filled
export function resetPassword(resetData, token) {
    console.log("\n\n\tIn services for reset password API", resetData, token)
    return axios.post(url + "/resetPassword", resetData, {
        headers: {
            token: token
        }
    })
}

//post requires all the two arguments to be filled
export function allNotes(){
    const tryToken = localStorage.getItem('token')

    console.log("\n\n\t---> authentication token -->",tryToken);
    
    console.log("\n\n\tIn services for all notes API" , authenticationToken)
    return axios.get(url + "/allNotes",  {
        headers: {
            token: tryToken
        }
    })

}

export function allArchives(){
    console.log("\n\n\tIn services for all archives API" , authenticationToken)
    return axios.get(url + "/allArchives",  {
        headers: {
            token: authenticationToken
        }
    })

}

export function allReminders(){
    console.log("\n\n\tIn services for all Reminders notes API" , authenticationToken)
    return axios.get(url + "/allReminders",  {
        headers: {
            token: authenticationToken
        }
    })
}

export function allTrash(){
    console.log("\n\n\tIn services for all Trash notes API" , authenticationToken)
    return axios.get(url + "/allTrash",  {
        headers: {
            token: authenticationToken
        }
    })
}


export function createNote(creationData) {
    console.log("\n\n\tIn services for creating a note API", creationData,authenticationToken)
    return axios.post(url + "/createNote", creationData, {
        headers: {
            token: authenticationToken
        }
    })
}

export function allLabels(){
    console.log("\n\n\tIn services for loading all labels API", authenticationToken)
    return axios.get(url + "/allLabels",  {
        headers: {
            token: authenticationToken
        }
    })
}

export function updateNote(updationData){
    console.log("\n\n\tIn services for updating note API", authenticationToken)
    return axios.post(url + "/updateNote",updationData,  {
        headers: {
            token: authenticationToken
        }
    })
}

export function deleteNote(deletionData){
    console.log("\n\n\tIn services for deleting note API", authenticationToken)
    return axios.post(url + "/deleteNote",deletionData,  {
        headers: {
            token: authenticationToken
        }
    })
}