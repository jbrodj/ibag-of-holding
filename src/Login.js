import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "./firebase.js"

const Login = (loginStatus, setLoginStatus, user, setUser) => {
    
// use state for storing email address at registration
const [registerEmail, setRegisterEmail] = useState('');
// use state for storing the password at registration
const [registerPassword, setRegisterPassword] = useState('');

const [loginEmail, setLoginEmail] = useState('');

const [loginPassword, setLoginPassword] = useState('');



onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
})
    console.log(user?.email)

// Async function that handles registration
    const register = async (e) => {
        e.preventDefault()
        try {
        const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
        // setLoginStatus(true)
        } catch (error) {
            console.log(error.message)
        }
    }

    const login = async (e) => {
        e.preventDefault()
        try {
        const user = await signInWithEmailAndPassword(auth, registerEmail, registerPassword)
        // setLoginStatus(true)
        } catch (error) {
            console.log(error.message)
        }
    }

    const logout = async () => {
        await signOut(auth)
    }

    const signupEmailChangeHandler = (event) => {
        setRegisterEmail(event.target.value)
        console.log(event.target.value)
    }

    const signupPasswordChangeHandler = (event) => {
        setRegisterPassword(event.target.value)
        console.log(event.target.value)
    }
    // console.log(registerPassword)
    // console.log(auth)



    return (
        <div className="authContainer">
            <form action="submit">
                <h2>Create account</h2>
                <label htmlFor="signupEmail">Email</label>
                <input type="email" id="signupEmail" placeholder="Email" onChange={signupEmailChangeHandler}/> 
                <label htmlFor="signupPassword">Password</label>
                {/* <input type="password" id="signupPassword" onChange={signupPasswordChangeHandler} /> */}
                <input type="password" id="signupPassword" placeholder="Password" onChange={signupPasswordChangeHandler}/> 
                <button className="submit" onClick={register}>Sign up!</button>
            </form>
            <form action="submit">
                <h2>Log in</h2>
                <label htmlFor="loginEmail">Email</label>
                <input type="email" id="loginEmail" placeholder="Email" onChange={(event) => {setLoginEmail(event.target.value);
                }}/>
                <label htmlFor="loginPassword">Password</label>
                <input type="password" id="loginPassword" onChange={(event) => {setLoginPassword(event.target.value);
                }}/>
                <button className="submit" onClick={login}>Log in!</button>
            </form>

            <h3>Logged in as: </h3>
                {user?.email}
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default Login



