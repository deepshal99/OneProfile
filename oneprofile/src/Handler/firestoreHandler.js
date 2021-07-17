import firebase from "firebase"

const db = firebase.firestore()

export function saveUser(email, name) {
    //This Function saves user to firestore database
    db.collection("users").doc(email).set({
        "Name": name,
        "Email": email
    }).then(() => { console.log("User added!!") });
}

export function getUserByEmail(email) {
    console.log("Email: " + email)
    // const userFromDb = db.collection("users").doc(email).get().then((snapshot) => {
    //     console.log(snapshot.id, " => ", snapshot.data().Password);
    // })
}