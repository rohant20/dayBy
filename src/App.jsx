import Header from './Header/Header.jsx';
import HomePage from './pages/HomePage.jsx';
import NewList from './pages/NewList.jsx';

import PropType from "prop-types";
import Entry from './pages/Entry.jsx';

export default function App(props) {

    const pages = [<HomePage />, <NewList />, <Entry view={0} />, <Entry view={1} />];

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