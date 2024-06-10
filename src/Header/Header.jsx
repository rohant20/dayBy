import Nav from 'react-bootstrap/Nav';
import styles from './Header.module.css';

import { Link } from 'react-router-dom';

function Header() {

    return (
        <Nav defaultActiveKey="/home" className={`flex-column ${styles.navComp}`}>
            <div className="container">
                <div className={`row ${styles.titleRow}`}>
                    <div className={`col-3 ${styles.logoCol}`}>
                        <img className={styles.navBarLogo} src="/dayByLogo.svg" alt="logo" />
                    </div>
                    <div className={`col-9 ${styles.logoCol}`}>
                        <Link to="/">
                            <h3 className={`${styles.navLink}`}>DayBy</h3>
                        </Link>
                    </div>
                </div>
            </div>
            <Nav.Link className={`${styles.navLink} `} eventKey="link-1">Link</Nav.Link>
            <Nav.Link className={`${styles.navLink} `} eventKey="link-2">Link</Nav.Link>
            <Nav.Link className={`${styles.navLink} `} eventKey="disabled">Disabled</Nav.Link>
        </Nav>
    );
}

export default Header