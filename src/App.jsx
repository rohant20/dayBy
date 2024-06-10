import Header from './Header/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import NewList from './pages/NewList.jsx';

import PropType from "prop-types";

export default function App(props) {

    const pages = [<HomePage />, <NewList />];

    return (
        <div className="pageContainer">
            <div className="row">
                <div className="col-3">
                    <Header />
                </div>
                <div className="col-9">
                    {pages[props.pageId]}
                </div>
            </div>
        </div>
    );
}

App.PropType = {
    pageId: PropType.number,
}