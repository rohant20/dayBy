import styles from "./TaskCard.module.css";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

export default function TaskCard(props) {

    return (

        <ListGroup.Item as="li">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.TaskTitle}</div>
            </div>
            <Badge bg="warning" pill>
                14
            </Badge>
        </ListGroup.Item>

    );
}