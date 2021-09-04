import { DialogsPageType } from '../../redux/dialogsReducer'
import { TextareaMsg } from '../common/TexteareaSuper/TextareaMsg'
import DialogItem from './Dialog/Dialog'
import s from './Dialogs.module.css'
import { DialogsPropsType } from './DialogsContainer'
import Message from './Message/Message' 



// type DialogsPropsType = {
//     data: DialogsPageType
//     onAddMsg: (checked: boolean) => void
//     onChangeCallback: (text: string) => void
// }


function Dialogs(props: DialogsPropsType) {

    const { dialogs, messages } = props.data

    const dialogsElements = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name} />)
    const messageElements = messages.map(m => <Message key={m.id} id={m.id} isMe={m.isMe} message={m.message} />)

    const addMsgHandler = (checked: boolean = false) => props.onAddMsg(checked)
    const onChangeCallback = (text: string) => props.onChangeCallback(text)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <TextareaMsg value={props.data.inputValue}
                              btnValue={'send msg'}
                              btnCallback={addMsgHandler}
                              onChangeCallback={ onChangeCallback}
                              checkbox
                
                />
            </div>
        </div>
    )
}

export default Dialogs