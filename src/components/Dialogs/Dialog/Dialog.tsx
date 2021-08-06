import { NavLink } from 'react-router-dom';
import { DialogItemType } from '../../../redux/dialogsReducer';
import s from './../Dialogs.module.css';



function DialogItem(props: DialogItemType) {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem