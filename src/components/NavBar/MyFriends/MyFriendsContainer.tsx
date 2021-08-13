import { StoreContext } from "../../../redux/StoreContext";
import { MyFriends } from "./MyFriends";

export const MyFriendsContainer = () => (
    <StoreContext.Consumer>
            {
             store =>   <MyFriends friends={store.getState().sidebar.myFriendsList}>Here are my friends</MyFriends>
            }
    </StoreContext.Consumer>
)