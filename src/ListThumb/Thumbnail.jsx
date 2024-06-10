import styles from './Thumbnail.module.css';
import Card from 'react-bootstrap/Card';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export default function Thumbnail(props) {

    return (
        <Link to="/list">
            <Card className={`bg-dark text-white ${styles.cardContainer}`}>
                <Card.Img className={styles.cardImg} src="/platter.jpg" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>{props.listName}</Card.Title>
                    <Card.Text>
                        {props.descrip}
                    </Card.Text>
                    <Card.Text>Last updated</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </Link>
    )
}

Thumbnail.PropType = {
    listName: PropTypes.string,
    descrip: PropTypes.string
}

