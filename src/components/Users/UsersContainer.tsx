import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "../../redux/store";
import { followAC, getUsersAC, setCurrentPage, unFollowAC, UserType } from "../../redux/usersReducer";
// import { UserFC } from "./UsersFC";
// import { UsersClassComp } from "./UsersClassComp";
import React from "react";
import { Users } from "./Users";
import axios from "axios";



type UsersResponseDataType = {
    items: UserType[]
    totalCount: number
    error: string
}

type UsersStateTypes = {
    pageSize: number
}

class UserContainer extends React.Component<UsersClassComponentFromConnectPropsType, UsersStateTypes> {

    constructor(props: UsersClassComponentFromConnectPropsType) {
        super(props);
        this.state = {
            pageSize: 10
        }
    }
    // get(`users?page=${currentPage}&count=${pageSize}`)

    usersCountOnPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ pageSize: +event.target.value })
        console.log(this.state.pageSize);
        axios
            .get<UsersResponseDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${+event.target.value}&page=${this.props.currentPage}`)
            .then((response: any) => {
                this.props.getUsers(response.data.items, +response.data.totalCount)
            })
    };

    changePage = (value: any) => {
        console.log(value.selected + 1);

        this.props.setCurrentPage(value.selected + 1)
        axios
            .get<UsersResponseDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.state.pageSize}&page=${value.selected + 1}`)
            .then((response: any) => {

                this.props.getUsers(response.data.items, +response.data.totalCount)
            })
    }


    componentDidMount() {
        axios
            .get<UsersResponseDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.state.pageSize}&page=${this.props.currentPage}`)
            .then((response: any) => {
                this.props.getUsers(response.data.items, +response.data.totalCount)
            })
    }



    render() {
        // const { follow, unFollow, users, getUsers, ...rest } = this.props
        console.log('NEW CONTAINER');

        return (
            <Users {...this.props} usersCountOnPageChange={this.usersCountOnPageChange} changePage={this.changePage} pageSize={this.state.pageSize}/>
        )
    }
}

type MapStateToPropsType = {
    users: UserType[]
    totalCount: number
    currentPage: number
}


const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
})

const MapDispatchToProps = (dispatch: Dispatch) => ({
    follow: (userId: number) => dispatch(followAC(userId)),
    unFollow: (userId: number) => dispatch(unFollowAC(userId)),
    getUsers: (users: UserType[], totalCount: number) => dispatch(getUsersAC(users, totalCount)),
    setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
})


const connector = connect(MapStateToProps, MapDispatchToProps)
export type UsersClassComponentFromConnectPropsType = ConnectedProps<typeof connector>


export default connector(UserContainer)