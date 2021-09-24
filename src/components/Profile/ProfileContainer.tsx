import { withRouter } from "react-router";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import { RouteComponentProps } from "react-router";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppStateType } from "../../redux/store";
import { askForUserProfile, setUserProfile, UserProfileType } from "../../redux/profileReducer";
import { profileAPI } from "../../api/social_api";
import withLoginRedirect from "../common/hoc/Redirect/withLoginRedirect";

type PathParamsType = {
    userId: string
}


type PropsType = RouteComponentProps<PathParamsType> & ConnectedType



class ProfileContainer extends React.Component<PropsType>{

    updateProfile() {
        let userId = this.props.match.params.userId || this.props.myID
        
        this.props.askForUserProfile(Number(userId))
        // profileAPI.getProfile(Number(userId))
        //     // axios
        //     //     .get<ProfileResponseDataType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        //     .then((res) => this.props.setUserProfile(res.data))
    }

    componentDidMount() {
        this.updateProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>) {

        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile()
        }
    }

    componentWillUnmount() {
        this.props.setUserProfile({} as UserProfileType)
    }

    render() {

        return (
            <div>
                <ProfileInfo profile={this.props.profile} />
                <MyPostsContainer />
            </div>
        )
    }
}

type MstpType = {
    profile: UserProfileType,
    myID: number
}

const MSTP = (state: AppStateType): MstpType => ({
    profile: state.profilePage.profile,
    myID: state.auth.user.id
})


const connector = connect(MSTP, { setUserProfile , askForUserProfile})

type ConnectedType = ConnectedProps<typeof connector>

export default withLoginRedirect(connector(withRouter(ProfileContainer)))