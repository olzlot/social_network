import { useEffect } from "react"
import { User } from "./User"
import { UsersClassComponentPropsType } from "./UsersContainer"
import axios from 'axios'
import { UserType } from "../../redux/usersReducer" 

type UsersResponseDataType = {
    items: UserType[]
    totalCount: number
    error:string
}

export const UserFC: React.FC<UsersClassComponentPropsType> = ({
    follow, unFollow, users, getUsers, ...rest
}) => {

const redirect = () => {
    window.location.replace('/HAKUNAMATATA')
}

    useEffect(() => {
     
        axios
            .get<UsersResponseDataType>('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => getUsers(response.data.items, +response.data.totalCount))
            .catch(redirect)
    }, [])

    return (
        <>
            USERS PAGE
            {users.map(u => <User key={u.id} data={u} follow={follow} unFollow={unFollow} />)}

            {JSON.stringify(users)}
        </>
    )
}