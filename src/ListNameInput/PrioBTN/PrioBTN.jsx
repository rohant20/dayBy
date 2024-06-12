import styles from "./PrioBTN.module.css";

export default function PrioBTN(props) {
    const btnClassName = "btnScaleAsc" + props.btnLabel;
    return (
        <button onClick={props.clickFunc} type="button" className={`btn ${styles.btnScale} ${styles[btnClassName]} `}>{props.btnLabel}</button>
    );
}