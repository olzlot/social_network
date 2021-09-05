import React from 'react'
import { User } from './User';
import { UsersClassComponentFromConnectPropsType } from './UsersContainer'
import axios from 'axios'
import { UserType } from '../../redux/usersReducer';
import { Pagination } from '../common/Pagination/Pagination';

type UsersResponseDataType = {
    items: UserType[]
    totalCount: number
    error: string
}

type UsersStateTypes = {
    pageSize: number
}

export class UsersClassComp extends React.Component<UsersClassComponentFromConnectPropsType, UsersStateTypes> {

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
                console.log(response.data);

                this.props.getUsers(response.data.items, +response.data.totalCount)
            })
    };

    changePage = (value: any) => {
        console.log(value.selected + 1);

        this.props.setCurrentPage(value.selected + 1)
        axios
            .get<UsersResponseDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.state.pageSize}&page=${value.selected + 1}`)
            .then((response: any) => {
                console.log(response.data);

                this.props.getUsers(response.data.items, +response.data.totalCount)
            })
    }


    componentDidMount() {
        axios
            .get<UsersResponseDataType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.state.pageSize}&page=${this.props.currentPage}`)
            .then((response: any) => {
                console.log(response.data);

                this.props.getUsers(response.data.items, +response.data.totalCount)
            })
    }



    render() {
        const { follow, unFollow, users, getUsers, ...rest } = this.props
        console.log('CLASS RENDER');

        return (
            <>
                'USERS PAGE CLASS' {/* /<CLASS> */}
                <div>
                    total pages: {Math.ceil(this.props.totalCount / this.state.pageSize)}
                    <div>
                        users on page:
                        <select onChange={this.usersCountOnPageChange} value={this.state.pageSize}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>

                <Pagination
                    onPageChange={this.changePage}
                    pageCount={Math.ceil(this.props.totalCount / this.state.pageSize)}

                />

                {users.map(u => <User key={u.id} data={u} follow={follow} unFollow={unFollow} />)}

                {JSON.stringify(users)}
            </>
        )
    }
}