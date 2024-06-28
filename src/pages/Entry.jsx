import Login from "../Entry/Login/Login.jsx";
import Register from "../Entry/Register/Register.jsx";

export default function Entry(props) {

    const forms = [<Register />, <Login />]

    return (
        <>
            {forms[props.view]}
        </>
    );
}