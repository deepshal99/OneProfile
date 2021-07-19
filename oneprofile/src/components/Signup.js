import React, {
    useRef,
    useState
} from "react";
// import ReactDOM from 'react-dom';
import {
    Link,
    useHistory
} from "react-router-dom";
import {
    Flex,
    Box,
    Heading,
    FormLabel,
    VStack,
    Input,
    Button,
    Spinner,
    Center,
    Spacer,
} from "@chakra-ui/react";
import {
    signup
} from "../Handler/RegistrationHandler";
import {
    saveUser
} from "../Handler/firestoreHandler";
import firebase from "firebase";
import {InfoGetter} from "../pages/UserInfo";

//Sign up Component

function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const h = useHistory();
    const [loading, setLoading] = useState(false);
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const signInWithGoogle = (e) => {
        e.preventDefault();
        auth
            .signInWithPopup(googleProvider)
            .then((res) => {
                console.log("User ID:"+res.user.uid)
                localStorage.setItem("loadedInEmail", res.user.email)
                localStorage.setItem("loadedInName", res.user.displayName)
                localStorage.setItem("photoURL", res.user.photoURL)
                console.log("photoURL: "+ res.user.photoURL)
        
                saveUser(res.user.email,
                    res.user.displayName)
                h.push("/multistep")
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    async function register(e) {
        e.preventDefault();
        try {
            setLoading(true);
            console.log("Email: " + emailRef.current.value);
            console.log("Password: " + passwordRef.current.value);
            await signup(emailRef.current.value, passwordRef.current.value)
                .then(
                    saveUser(
                        emailRef.current.value,
                        nameRef.current.value,
                        passwordRef.current.value
                    )
                )
                .then(() => {
                    h.push("/profile");
                });
        } catch (error) {
            alert(error);
        }

        setLoading(false);
    }

    return (
        <div>
            <VStack >
                <Flex width="Full"
                    align="center"
                    justifyContent="center" >
                    <Box p={
                        8
                    }
                        maxWidth="400px"
                        borderWidth={
                            1
                        }
                        borderRadius={
                            8
                        }
                        boxShadow="lg" >
                        <Box textAlign="center" >
                            <Heading > Signup </Heading> </Box > {
                            " "
                        } <Box my={
                            4
                        }
                            textAlign="left" >
                            <form onSubmit={
                                register
                            }>

                                <FormLabel > Name </FormLabel> <Input placeholder="Joe Smith"
                                    id="name"
                                    ref={
                                        nameRef
                                    }
                                    mb={
                                        2
                                    }
                                    required />
                                <FormLabel> Email </FormLabel> <Input placeholder="joesmith@email.com"
                                    id="email"
                                    ref={
                                        emailRef
                                    }
                                    mb={
                                        2
                                    }
                                    required />
                                <FormLabel > Password </FormLabel> <Input placeholder="********"
                                    type="password"
                                    id="password"
                                    ref={
                                        passwordRef
                                    }
                                    mb={
                                        2
                                    }
                                    required />
                                <Button disabled={
                                    loading
                                }
                                    colorScheme="blue"
                                    width="full"
                                    mt={
                                        4
                                    }
                                    type="submit" >
                                    <Spinner size="sm"
                                        mr={
                                            3
                                        }
                                        style={
                                            {
                                                display: loading ? "block" : "none"
                                            }
                                        } /> Sign Up  </Button> <Spacer height="16px" />
                                <div margin-top="10px"
                                    align="center"
                                    className="login-buttons" >
                                    <button className="login-provider-button"
                                        onClick={
                                            signInWithGoogle
                                        } >
                                        <Flex align="center"
                                            justifyContent="center" >
                                            <img src="https://www.designbust.com/download/28/png/google_logo_icon512.png"
                                                width="30px"
                                                alt="google icon" />
                                            <Spacer width="10px" />
                                            <span p={
                                                2
                                            } > Continue with Google </span> </Flex > </button> </div> <br />
                                <br />
                            </form> <br />
                            <Center> <Link to="/login" > Already have an account ? </Link>
                            </Center >  </Box> </Box> </Flex>
            </VStack >
        </div>
    );
}

export default Signup;