import styles from "../Entry.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { Link } from 'react-router-dom';


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUsername(e) {
        setUsername(un => e.target.value);
    }

    function handlePassword(e) {
        setPassword(pw => e.target.value);
    }

    async function fetchUser(currUser) {
        console.log(currUser);

        const resp = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(currUser)
        });

        const userCred = await resp.json();
        return userCred;
    }

    function logIn(e) {
        e.preventDefault();

        const currUser = {
            username: username,
            password: password,
            email: "placeholder"
        }

        fetchUser(currUser).then(data => {
            console.log(data);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }

    return (
        <Form onSubmit={logIn} className={`${styles.formContainer}`}>
            <h1 className={`${styles.formText}`}>DAYBY</h1>
            <div className={`${styles.formContent}`}>
                <h4 className={`${styles.formText}`}>Log into DayBy</h4>
                <Form.Group className={`mb-3 ${styles.inputBoxes}`} controlId="formBasicEmail" onChange={handleUsername} >
                    <Form.Label className={styles.Label}>Username:</Form.Label>
                    <input className={styles.inputBox} type="text" placeholder="Enter username" onChange={handleUsername} />

                </Form.Group>

                <Form.Group className={`mb-3 ${styles.inputBoxes}`} controlId="formBasicPassword">
                    <Form.Label className={styles.Label}>Password:</Form.Label>
                    <input className={styles.inputBox} type="password" placeholder="Enter password" onChange={handlePassword} />
                </Form.Group>

                <div className="controlGroup">
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    <Link to="/signup">
                        <h4 className="">Sign Up</h4>
                    </Link>
                </div>

            </div>
        </Form >

    );
}