import React from "react";
import { UserProfileType } from "../../../redux/profileReducer";
import { Spinner } from "../../common/Spinner/Spinner";
import s from './ProfileInfo.module.css';
import userPhoto from './../../../assets/images/userLogo.png'

type ProfileInfoPropsType = {
    profile: UserProfileType
}

function ProfileInfo(props: ProfileInfoPropsType) {

    const { userId, lookingForAJob, lookingForAJobDescription, fullName, contacts, photos } = props.profile
    // console.log(props.profile);

    if(!photos) {
        return <div>12312312312312</div> 
    }

    return (
        <>
            {/* {!photos && <Spinner />} */}
            {
                photos &&
                <>
                    <div className={s.img}>
                        <img src="https://images.freeimages.com/images/small-previews/2ae/bokeh-background-in-light-tan-rose-1635915.jpg" alt="" />
                    </div>
                    <div className={s.info}>

                        <div className={s.avatar}>
                            <img src={photos.large !== null ? photos.large : userPhoto} alt="avatar" />
                        </div>
                        <div>
                            {fullName}
                            <ul>
                                <li>despr1</li>
                                <li>despr2</li>
                                <li>despr3</li>
                            </ul>
                        </div>
                    </div>
                </>}
        </>
    )
}

export default ProfileInfo