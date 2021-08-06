
import { MessageType } from '../../../redux/dialogsReducer';
import s from './Message.module.css';




function Message(props: MessageType) {

    let wrapper: React.CSSProperties = {
        width: '300px',
        display: 'flex',
        flexDirection: props.isMe ? "row" : "row-reverse",
        justifyContent: 'flex-start',
        alignItems: 'center',


    }

    const icon = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        fontSize: '10px',
        display: 'flex',
        borderRadius: '50%',
        margin: '10px'


    }

    return (
        <div style={wrapper} className={s.message}>
            <div style={icon}><span className={s.icon}>{props.isMe ? 'I said:' : 'to me'}</span></div>
            <div>{props.message}</div>
        </div>
    );
}

export default Message
