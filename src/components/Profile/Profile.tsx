import React from "react";
import { ProfilePageType } from "../../redux/profileReducer";
import { ActionsType } from "../../redux/store";
// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfilePropsType = {
    data: ProfilePageType
    dispatch: (action: ActionsType) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts data={props.data} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile