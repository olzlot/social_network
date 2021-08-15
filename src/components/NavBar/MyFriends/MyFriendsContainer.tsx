import { connect } from "react-redux";
import { FriendType } from "../../../redux/sidebarReducer";
import { AppStateType } from "../../../redux/store";
import { MyFriends } from "./MyFriends";

// export const MyFriendsContainer = () => (
//     <StoreContext.Consumer>
//             {
//              store =>   <MyFriends friends={store.getState().sidebar.myFriendsList}>Here are my friends</MyFriends>
//             }
//     </StoreContext.Consumer>
// )

type MapStateToPropsType = {
    friends: FriendType[]
}

const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    friends: state.sidebar.myFriendsList
})


export const MyFriendsContainer = connect(MapStateToProps)(MyFriends)