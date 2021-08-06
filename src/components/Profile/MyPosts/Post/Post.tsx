import React from "react";
import { PostType } from "../../../../redux/profileReducer";
import styles from './Post.module.css';



const Post = (props: PostType) => {
    return (
        <div className={styles.post}>
            <div className={styles.avatar}><img src="https://sun9-87.userapi.com/c10241/u1588801/a_41df6501.jpg" alt="avatar" /></div>
            <span>{props.message}</span>
        </div>
    )
}

export default Post