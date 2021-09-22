import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserType } from "../../redux/usersReducer";
import userPhoto from './../../assets/images/userLogo.png'


type UserPropsType = {
    data: UserType
    follow: (id: number) => void
    unFollow: (id: number) => void
}


export const User = (props: UserPropsType) => {
    const { id, name, status, photos: { small = userPhoto, large }, followed } = props.data

    const [disabled, setDisabled] = useState(false)
    // const disabled= false


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '5px', borderBottom: '1px solid gray', marginBottom: '6px' }}>
            <div>

                <NavLink to={`profile/${id}`}>
                    <img style={{ width: '60px', height: 'auto', borderRadius: '50%' }} src={small !== null ? small : userPhoto} alt="logo" />
                </NavLink>
                <div>
                    {followed
                        ? <button disabled={disabled} onClick={() => {
                            setDisabled(true)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'e7555453-e0c0-4326-99ca-77f39255724e'
                                    }
                                })
                                .then(res => {
                                    if (res.data.resultCode === 0) {
                                        props.unFollow(id)
                                    }
                                })
                                .finally(()=> setDisabled(false))
                        }}>UNFOLLOW</button>
                        : <button disabled={disabled} onClick={() => {
                            setDisabled(true)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {},
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'e7555453-e0c0-4326-99ca-77f39255724e'
                                    }
                                })
                                .then(res => {
                                    if (res.data.resultCode === 0) {
                                        props.follow(id)
                                    } 
                                })
                                .finally(()=> setDisabled(false))
                        }}>FOLLOW</button>
                    }
                    {/* <button onClick={followToogleHandler}
                    >{followed ? 'FOLLOW' : 'UNFOLLOW'}
                    </button> */}
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
