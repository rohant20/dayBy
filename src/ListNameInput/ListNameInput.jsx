import Card from 'react-bootstrap/Card';
import PrioBTN from './PrioBTN/PrioBTN.jsx';

import React, { createElement, useState, useRef, useEffect } from "react";
import { ListGroup } from 'react-bootstrap';

import TaskCard from "../TaskCard/TaskCard.jsx";

import styles from "./LNI.module.css";

export default function ListNameInput() {
    const currDate = new Date();
    const [cardProps, setProps] = useState([]);

    let taskNameRef = useRef("");
    let taskPrioRef = useRef(0);
    let taskKey = useRef(0);

    function handleTaskName(e) {
        taskNameRef.current = e.target.value;
    }

    function handleTaskPrio(e) {
        taskPrioRef.current = Number(e.target.innerHTML);
    }

    function resetPropVals() {
        taskNameRef.current = "";
        taskPrioRef.current = 0;
    }

    function taskCardCreation(e) {
        e.preventDefault();

        let newProps = {
            id: taskKey.current,
            TaskTitle: taskNameRef.current,
            TaskPrio: taskPrioRef.current
        };
        console.log(newProps.TaskPrio);

        if (newProps.TaskTitle == "" || newProps.TaskPrio == 0) {
            return;
        }

        taskKey.current++;
        console.log(newProps.id + " " + taskKey.current);
        setProps(cp => [...cp, newProps]);
        resetPropVals();
        e.target.reset();
    }


    return (
        <Card className={styles.cardHolder}>
            <Card.Body className={styles.inputCard}>
                <Card.Title>
                    <h1 className={styles.cardTitle}>{`${currDate.getMonth()}/${currDate.getDay()}'s List`}</h1>
                </Card.Title>
                <ListGroup id="taskList" as="ul">
                    {cardProps.map((cp) => <TaskCard key={cp.id} TaskTitle={cp.TaskTitle} TaskPrio={cp.TaskPrio} />)}
                </ListGroup>

                <form className={styles.inputBox} onSubmit={taskCardCreation}>
                    <input className={styles.inputLine} type="text" name="Task" onChange={handleTaskName} />
                    <div className={styles.formContainer}>
                        <PrioBTN clickFunc={handleTaskPrio} btnLabel="1" />
                        <PrioBTN clickFunc={handleTaskPrio} btnLabel="2" />
                        <PrioBTN clickFunc={handleTaskPrio} btnLabel="3" />
                        <PrioBTN clickFunc={handleTaskPrio} btnLabel="4" />
                        <PrioBTN clickFunc={handleTaskPrio} btnLabel="5" />
                        <PrioBTN clickFunc={handleTaskPrio} btnLabel="6" />
                        <PrioBTN clickFunc={handleTaskPrio} btnLabel="7" />
                        <PrioBTN clickFunc={handleTaskPrio} btnLabel="8" />
                        <PrioBTN clickFunc={handleTaskPrio} btnLabel="9" />
                        <input className={styles.submitBtn} type="submit" />
                    </div>
                </form>
            </Card.Body>
        </Card >
    );
}