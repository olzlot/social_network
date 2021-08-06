import React from "react";
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div className={s.info}>
            {/* <div className={styles.img}>
                <img src="https://images.freeimages.com/images/small-previews/2ae/bokeh-background-in-light-tan-rose-1635915.jpg" alt="" />
            </div> */}
            <div className={s.avatar}>
                <img src="https://sun9-87.userapi.com/c10241/u1588801/a_41df6501.jpg" alt="avatar" />
            </div>
            <ul>
                <li>despr1</li>
                <li>despr2</li>
                <li>despr3</li>
            </ul>
        </div>
    )
}

export default ProfileInfo