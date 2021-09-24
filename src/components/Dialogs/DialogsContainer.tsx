import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addNewMsgAC, changeNewMsgTextAC, DialogsPageType } from '../../redux/dialogsReducer'
import { AppStateType } from '../../redux/store'
import withLoginRedirect from '../common/hoc/Redirect/withLoginRedirect'
// import { StoreContext } from '../../redux/StoreContext'
import Dialogs from './Dialogs'




// function DialogsContainer() {

//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {

//                     const onAddMsg = (checked: boolean = false) => {
//                         store.getState().dialogsPage.inputValue.trim() && store.dispatch(addNewMsgAC(checked))
//                     }


//                     const onChangeCallback = (text: string) => store.dispatch(changeNewMsgTextAC(text))


//                     return <Dialogs data={store.getState().dialogsPage}
//                                     onAddMsg = {onAddMsg}
//                                     onChangeCallback = {onChangeCallback}
//                             />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }
type MapStateToPropsType = {
    data: DialogsPageType
}
type MapDispatchToPropsType = {
    onAddMsg: (checked: boolean) => void
    onChangeCallback: (text: string) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    data: state.dialogsPage
})
const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    onAddMsg: (checked: boolean = false) => dispatch(addNewMsgAC(checked)),
    onChangeCallback: (text: string) => dispatch(changeNewMsgTextAC(text))
})

export const DialogsContainer = withLoginRedirect(connect(MapStateToProps, MapDispatchToProps)(Dialogs))