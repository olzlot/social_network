import { addPostAC, changePostTextAC, ProfilePageType } from "../../../redux/profileReducer";
import { connect } from "react-redux";
// import { StoreContext } from "../../../redux/StoreContext";
import MyPosts from "./MyPosts";
import { Dispatch } from "redux";
import { AppStateType } from "../../../redux/store";


type MapStateToPropsType  = {
    data: ProfilePageType
}

type MapDispatchToPropsType  = {
    onAddPost: () => void
    onChangeCallback : (text: string) => void
}

const MapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    data: state.profilePage,
})

const MapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => ({
    onAddPost: () => dispatch(addPostAC()),
    onChangeCallback : (text: string) => dispatch(changePostTextAC(text))
})

export const MyPostsContainer = connect(MapStateToProps, MapDispatchToProps)(MyPosts)






