import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

import styles from '../RegistrationForm/RegistrationForm.module.css';

const SeacrhBox = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <h5 className={styles.textFilter}>Find your contact by name</h5>
            <input className={styles.formField} onChange={(event) => {
                const action = changeFilter(event.target.value);
                dispatch(action); 
            }} type="text" placeholder="Elli" />
        </div>
    );
}

export default SeacrhBox;
