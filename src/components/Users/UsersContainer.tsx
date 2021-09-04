import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "../../redux/store";
import { followAC, getUsersAC, unFollowAC, UserType } from "../../redux/usersReducer";
import { UserFC } from "./UsersFC";
import { UsersClassComp } from "./UsersClassComp";

type MapStateToPropsType = {
    users: UserType[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    getUsers: (users: UserType[]) => void
}


const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: state.usersPage.users
})


const MapDispatchToProps = (dispatch: Dispatch) => ({
    follow: (userId: number) => dispatch(followAC(userId)),
    unFollow: (userId: number) => dispatch(unFollowAC(userId)),
    getUsers: (users: UserType[], totalCount: number) => dispatch(getUsersAC(users, totalCount))
})
const connector = connect(MapStateToProps,MapDispatchToProps)
export type UsersClassComponentPropsType = ConnectedProps<typeof connector>


export const UsersContainer = connector(UsersClassComp)