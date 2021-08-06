import { addPostAC, changePostTextAC, ProfilePageType } from "../../../redux/profileReducer";
import { ActionsType } from "../../../redux/store";
import { TextareaMsg } from "../../common/TexteareaSuper/TextareaMsg";
import styles from './MyPosts.module.css';
// import Message, { MessageType } from "./Post/Message";
import Post from './Post/Post';

// const messageData: MessageType = {
//     avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
//     name: 'Some Name',
//     message: 'Lorem ipciunt sunt, volupluptatibus.',
//     time: '22:00',
// }


type MyPostsPropsType = {
    data: ProfilePageType
    dispatch: (action: ActionsType) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    const postsElements = props.data.posts.map(p => <Post key={p.id} id={p.id} message={p.message} />)

    const addPostHandler = () => {
        props.data.inputValue.trim() && props.dispatch(addPostAC())

    }

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
                        onChangeCallback={text =>  props.dispatch(changePostTextAC(text))}
                        btnCallback={addPostHandler}
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






