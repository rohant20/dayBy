//Stylesheets
import styles from './NavBar.module.css';

//PropType Import
import PropTypes from 'prop-types';

//SVGs and Images
import rightArrow from './assets/rightArrow.svg';
import leftArrow from './assets/leftArrow.svg';



export default function NavBar(props) {

    return (
        <div className={styles.nav}>
            {/* Create a left and right filter
                - Sorts different to-do lists
                - Will allow you to search for a To-Do List */}
            <h1 id={styles.navTitle}>Hello, {props.username}</h1>
        </div>
    );
}

NavBar.PropTypes = {
    username: PropTypes.string
}
