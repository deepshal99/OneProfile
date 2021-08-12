import firebase from "firebase"

const db = firebase.firestore()

export async function saveUser(email, name,profileUrl,about,profession) {
    //This Function saves user to firestore database
    return db.collection("users").doc(email).set({
        "Name": name,
        "Email": email,
        "Profession": profession,
        "About":about,
        "ProfileUrl":profileUrl
    });
}

export async function getUserByEmail(email) {
    return db.collection("users").doc(email).get()
}