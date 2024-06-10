import Card from 'react-bootstrap/Card';
import React, { createElement, useState, useRef, useEffect } from "react";
import { ListGroup } from 'react-bootstrap';

import TaskCard from "../TaskCard/TaskCard.jsx";

import styles from "./LNI.module.css";

export default function ListNameInput() {
    const currDate = new Date();
    const [cardProps, setProps] = useState([]);

    let taskList;
    let taskNameRef = useRef("");
    let taskKey = 0;

    function handleTaskName(e) {
        taskNameRef = e.target.value;
    }

    function taskCardCreation(e) {
        e.preventDefault();

        let newProps = {
            id: taskKey,
            TaskTitle: taskNameRef
        };
        taskKey++;
        setProps(cp => [...cp, newProps]);
    }


    return (
        <Card className={styles.cardHolder}>
            <Card.Body className={styles.inputCard}>
                <Card.Title>
                    <h1 className={styles.cardTitle}>{`${currDate.getMonth()}/${currDate.getDay()}'s List`}</h1>
                </Card.Title>
                <ListGroup id="taskList" as="ul">
                    {cardProps.map((cp) => <TaskCard key={cp.id} TaskTitle={cp.TaskTitle} />)}
                </ListGroup>

                <form className={styles.inputBox} onSubmit={taskCardCreation}>
                    <input className={styles.inputLine} type="text" name="Task" onChange={handleTaskName} />
                    <input className={styles.submitBtn} type="submit" />
                </form>
            </Card.Body>
        </Card >
    );
}