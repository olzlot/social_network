import { addNewMsgAC, changeNewMsgTextAC } from '../../redux/dialogsReducer'
import { StoreContext } from '../../redux/StoreContext'
import Dialogs from './Dialogs'




function DialogsContainer() {




    return (
        <StoreContext.Consumer>
            {
                store => {

                    const onAddMsg = (checked: boolean = false) => {
                        store.getState().dialogsPage.inputValue.trim() && store.dispatch(addNewMsgAC(checked))
                    }


                    const onChangeCallback = (text: string) => store.dispatch(changeNewMsgTextAC(text))


                    return <Dialogs data={store.getState().dialogsPage}
                                    onAddMsg = {onAddMsg}
                                    onChangeCallback = {onChangeCallback}
                            />
                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer