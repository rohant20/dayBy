import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import styles from "../Entry.module.css";
import { Link } from 'react-router-dom';

export default function Register() {

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleEmail(e) {
        setEmail(em => e.target.value);
    }

    function handleUsername(e) {
        setUsername(em => e.target.value);
    }

    function handlePassword(e) {
        setPassword(em => e.target.value);
    }


    async function createUser(newUser) {
        console.log(newUser);

        const resp = await fetch("http://localhost:8080/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        });

        const userCred = await resp.json();
        return userCred;
    }

    function signUp(e) {
        e.preventDefault();
        const newUser = {
            email: email,
            username: username,
            password: password
        }

        console.log(newUser);

        createUser(newUser).then(data => {
            console.log(data);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    }


    return (
        <Form onSubmit={signUp} className={`${styles.formContainer}`}>
            <h1 className={`${styles.formText}`}>DAYBY</h1>
            <div className={`${styles.formContent}`}>
                <h4 className={`${styles.formText}`}>Sign up for DayBy</h4>
                <Form.Group className={`mb-3 ${styles.inputBoxes}`} controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <input className={styles.inputBox} type="email" placeholder="Enter email" onChange={handleEmail} />
                </Form.Group>

                <Form.Group className={`mb-3 ${styles.inputBoxes}`} controlId="formBasicUsername">
                    <Form.Label>Username:</Form.Label>
                    <input className={styles.inputBox} type="username" placeholder="Enter username" onChange={handleUsername} />
                </Form.Group>

                <Form.Group className={`mb-3 ${styles.inputBoxes}`} controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <input className={styles.inputBox} type="password" placeholder="Enter password" onChange={handlePassword} />
                </Form.Group>
                <div className="controlGroup">
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                    <Link to="/login">
                        <h4 className="">Log In</h4>
                    </Link>
                </div>
            </div>
        </Form >
    );
}