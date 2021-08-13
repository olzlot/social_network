import { ProfilePageType } from "../../../redux/profileReducer";
import { TextareaMsg } from "../../common/TexteareaSuper/TextareaMsg";
import styles from './MyPosts.module.css';
import Post from './Post/Post';

type MyPostsPropsType = {
    data: ProfilePageType
    onChangeCallback: (text: string) => void
    onAddPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.data.posts.map(p => <Post key={p.id} id={p.id} message={p.message} />)

    // Use code bellow if don`t use TextareaMsg
    // const onChangeValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     const text = e.currentTarget.value
    //     props.dispatch(changePostTextCreator(text))
    // }

    return (
        <div className={styles.myPosts}>

            <TextareaMsg 
                        btnValue={'Send post'} 
                        value={props.data.inputValue} 
                        onChangeCallback={props.onChangeCallback}
                        btnCallback={props.onAddPost}
                        />

           {/* <div className={styles.newPost}>
                <textarea value={props.data.inputValue} onChange={onChangeValueHandler}></textarea>
                <div className={styles.button} onClick={addPostHandler}> <input type="submit" value={'Send message'} /></div>
            </div> */}

            {postsElements}

        </div>

    )
}

export default MyPosts






