import React from 'react'
import { User } from './User';
import { UsersClassComponentPropsType } from './UsersContainer'
import axios from 'axios'
import { UserType } from '../../redux/usersReducer';

type UsersResponseDataType = {
    items: UserType[]
    totalCount: number
    error: string
}

export class UsersClassComp extends React.Component<UsersClassComponentPropsType> {

    // constructor(props: UsersClassComponentPropsType) {
    //     super(props);

    // }
    // get(`users?page=${currentPage}&count=${pageSize}`)


    componentDidMount() {
        axios
            .get<UsersResponseDataType>('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                console.log(response.data);
                
                this.props.getUsers(response.data.items, +response.data.totalCount)})
        
    }



    render() {
        const { follow, unFollow, users, getUsers, ...rest } = this.props
        console.log('CLASS RENDER');
        
        return (
            <>
                'USERS PAGE CLASS' {/* /<CLASS> */}
                {users.map(u => <User key={u.id} data={u} follow={follow} unFollow={unFollow} />)}

                {JSON.stringify(users)}
            </>
        )
    }
}