import { UserType } from "../../redux/usersReducer";
import userPhoto from './../../assets/images/userLogo.png'


type UserPropsType = {
    data: UserType
    follow: (id: number) => void 
    unFollow: (id: number) => void 
}


export const User = (props: UserPropsType) => {
    const { id, name, status, photos: { small = userPhoto, large },  followed } = props.data

    const followToogleHandler = () => {
        followed ? props.unFollow(id) : props.follow(id)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', borderBottom: '1px solid gray', marginBottom: '6px' }}>
            <div>
                <img style={{ width: '60px', height: 'auto', borderRadius: '50%' }} src={small !==null ? small : userPhoto} alt="logo" />
                <div>
                    <button    onClick={followToogleHandler}
                                >{followed ? 'FOLLOW' : 'UNFOLLOW'}
                    </button>
                    </div>
            </div>
            <div style={{ marginLeft: '15px' }}>
                {name} <br />
                {status}
            </div>
            {/* <div>
                {country}, <br />
                {city}
            </div> */}
        </div>
    )
};
