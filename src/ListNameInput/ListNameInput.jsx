import Card from 'react-bootstrap/Card';
import PrioBTN from './PrioBTN/PrioBTN.jsx';

import React, { createElement, useState, useRef, useEffect } from "react";
import { ListGroup } from 'react-bootstrap';

import TaskCard from "../TaskCard/TaskCard.jsx";

import styles from "./LNI.module.css";

export default function ListNameInput() {
    //Constants
    const currDate = new Date();
    const [cardProps, setProps] = useState([]);

    //Ref Values
    let taskNameRef = useRef("");
    let taskPrioRef = useRef(0);
    let taskKey = useRef(0);
    let taskTimeRef = useRef(0);
    let dependentTasks = useRef([]);

    //Handler Functions
    function handleTaskName(e) {
        taskNameRef.current = e.target.value;
    }

    function handleTaskPrio(e) {
        taskPrioRef.current = Number(e.target.innerHTML);
    }

    function handleTaskTime(e) {
        taskTimeRef.current = Number(e.target.value);
    }

    function handleTaskDepend(id) {
        if (!(dependentTasks.current.includes(id))) {
            dependentTasks.current.push(id);
        }
        console.log(dependentTasks.current);
    }

    //Sync Functions
    // -  Form Reset
    // -  Task Card Creation
    function resetPropVals() {
        taskNameRef.current = "";
        taskPrioRef.current = 0;
        taskTimeRef.current = 0;
        dependentTasks.current = [];
    }

    function taskCardCreation(e) {
        e.preventDefault();

        let newProps = {
            id: taskKey.current,
            TaskTitle: taskNameRef.current,
            TaskPrio: taskPrioRef.current,
            TaskTime: taskTimeRef.current,
            DependentTasks: dependentTasks.current
        };

        if (newProps.TaskTitle == "" || newProps.TaskPrio == 0 || newProps.TaskTime == 0) {
            return;
        }

        taskKey.current++;
        console.log(newProps);
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
                    {cardProps.map((cp) => <TaskCard key={cp.id} CardId={cp.id} TaskTitle={cp.TaskTitle} TaskPrio={cp.TaskPrio} TaskTime={cp.TaskTime} OnClickFunc={handleTaskDepend} />)}
                </ListGroup>

                <form className={styles.inputBox} onSubmit={taskCardCreation}>
                    <input className={styles.inputLine} type="text" name="Task" onChange={handleTaskName} />
                    <input className={styles.timeInput} type="text" name="Task" onChange={handleTaskTime} />
                    <div className={styles.formContainer}>
                        <div className={styles.prioContainer}>
                            <PrioBTN clickFunc={handleTaskPrio} btnLabel="1" />
                            <PrioBTN clickFunc={handleTaskPrio} btnLabel="2" />
                            <PrioBTN clickFunc={handleTaskPrio} btnLabel="3" />
                            <PrioBTN clickFunc={handleTaskPrio} btnLabel="4" />
                            <PrioBTN clickFunc={handleTaskPrio} btnLabel="5" />
                            <PrioBTN clickFunc={handleTaskPrio} btnLabel="6" />
                            <PrioBTN clickFunc={handleTaskPrio} btnLabel="7" />
                            <PrioBTN clickFunc={handleTaskPrio} btnLabel="8" />
                            <PrioBTN clickFunc={handleTaskPrio} btnLabel="9" />
                        </div>
                        <input className={styles.submitBtn} type="submit" />
                        <input className={styles.submitBtn} type='button' value="Generate List" />
                    </div>
                </form>
            </Card.Body>
        </Card >
    );
}