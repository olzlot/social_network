import { Dispatch } from "redux";
import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "../../redux/store";
import { followAC, getUsersAC, setCurrentPage, toogleSpinner, unFollowAC, UserType } from "../../redux/usersReducer";
// import { UserFC } from "./UsersFC";
// import { UsersClassComp } from "./UsersClassComp";
import React from "react";
import { Users } from "./Users";
import { usersAPI } from "../../api/social_api";





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

    redirect = () => {
        window.location.replace('/HAKUNAMATATA')
    }

    componentDidMount() {
        this.props.toogleSpinner(true)

        usersAPI.getUsers(this.state.pageSize, this.props.currentPage)
            .then((response) => {
                this.props.getUsers(response.data.items, response.data.totalCount)
            })
            .catch(this.redirect)
            .finally(() => this.props.toogleSpinner(false))
    }

    usersCountOnPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        this.setState({ pageSize: +event.target.value })
        this.props.toogleSpinner(true)
        this.props.setCurrentPage(1)
        usersAPI.getUsers(+event.target.value, 1)
            .then((response) => {
                this.props.getUsers(response.data.items, response.data.totalCount)
            })
            .catch(this.redirect)
            .finally(() => this.props.toogleSpinner(false))
    };

    changePage = (value: any) => {
        // !!!!!!!!!!!!!!!!!!!!!!  ВСЕ ЛОМАЕТ
        this.props.toogleSpinner(true)
        this.props.setCurrentPage(value.selected + 1)
        usersAPI.getUsers(this.state.pageSize, value.selected + 1)
            .then((response) => {
                this.props.getUsers(response.data.items, response.data.totalCount)
            })
            .catch(this.redirect)
            .finally(() => this.props.toogleSpinner(false))
    }





    render() {
        // const { follow, unFollow, users, getUsers, ...rest } = this.props
        console.log('NEW CONTAINER');

        return (
            <Users {...this.props} usersCountOnPageChange={this.usersCountOnPageChange} changePage={this.changePage} pageSize={this.state.pageSize} />
        )
    }
}

type MapStateToPropsType = {
    users: UserType[]
    totalCount: number
    currentPage: number
    isFetching: boolean
}


const MapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
})

const MapDispatchToProps = (dispatch: Dispatch) => ({
    follow: (userId: number) => dispatch(followAC(userId)),
    unFollow: (userId: number) => dispatch(unFollowAC(userId)),
    getUsers: (users: UserType[], totalCount: number) => dispatch(getUsersAC(users, totalCount)),
    setCurrentPage: (currentPage: number) => dispatch(setCurrentPage(currentPage)),
    toogleSpinner: (isFetching: boolean) => dispatch(toogleSpinner(isFetching))
})


const connector = connect(MapStateToProps, MapDispatchToProps)
export type UsersClassComponentFromConnectPropsType = ConnectedProps<typeof connector>


export default connector(UserContainer)