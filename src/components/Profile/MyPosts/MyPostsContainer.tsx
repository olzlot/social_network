import { addPostAC, changePostTextAC } from "../../../redux/profileReducer";
import { StoreContext } from "../../../redux/StoreContext";
import MyPosts from "./MyPosts";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const onChangeCallback = (text: string) => store.dispatch(changePostTextAC(text))
                    const onAddPost = () => store.getState().profilePage.inputValue.trim() && store.dispatch(addPostAC())

                    return (
                        <MyPosts data={store.getState().profilePage}
                            onChangeCallback={onChangeCallback}
                            onAddPost={onAddPost}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer






