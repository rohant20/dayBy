import styles from "./TaskCard.module.css";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

import PropTypes from 'prop-types';

export default function TaskCard(props) {
    const badgeClass = "badge" + props.TaskPrio;
    console.log(props.TaskTitle + " " + props.TaskPrio + " " + props.key);

    return (

        <ListGroup.Item as="li" className={styles.taskCard}>
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.TaskTitle}</div>
                <div className="fw-bold">{`${props.TaskTime} mins`}</div>
            </div>
            <Badge className={styles[badgeClass]} pill>
                {props.TaskPrio}
            </Badge>
        </ListGroup.Item>

    );
}

TaskCard.PropTypes = {
    TaskTitle: PropTypes.string,
    TaskPrio: PropTypes.number,
    TaskTime: PropTypes.number
}
