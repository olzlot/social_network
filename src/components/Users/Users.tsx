import { Pagination } from "../common/Pagination/Pagination"
import { User } from "./User"
import { UsersClassComponentFromConnectPropsType } from "./UsersContainer"

type UsersContainerPropsType = {
    usersCountOnPageChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    changePage: (value: any) => void
    pageSize: number
}
type UsersPropsTypes = UsersClassComponentFromConnectPropsType & UsersContainerPropsType



export const Users = (props: UsersPropsTypes) => {
    const { follow, unFollow, users, getUsers,usersCountOnPageChange, changePage, ...rest } = props
    console.log('UUUU');
    
    return (
        <>
                'USERS PAGE CLASS' {/* /<CLASS> */}
                <div>
                    total pages: {Math.ceil(props.totalCount / props.pageSize)}
                    <div>
                        users on page:
                        <select onChange={usersCountOnPageChange} value={props.pageSize}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>

                <Pagination
                    onPageChange={changePage}
                    pageCount={Math.ceil(props.totalCount / props.pageSize)}

                />

                {users.map(u => <User key={u.id} data={u} follow={follow} unFollow={unFollow} />)}

                {JSON.stringify(users)}
            </>
    )
}