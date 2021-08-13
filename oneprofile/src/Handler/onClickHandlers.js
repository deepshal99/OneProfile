
export signInWithGoogle = (e) => {
    e.preventDefault()
    auth.signInWithPopup(googleProvider).then((res) => {
        console.log(res.user.email)
        localStorage.setItem("loadedInEmail", res.user.email)
        localStorage.setItem("loadedInName", res.user.displayName)

        saveUser(res.user.email,
            res.user.displayName)
        h.push("/profile")
    }).catch((error) => {
        console.log(error.message)
    })
}