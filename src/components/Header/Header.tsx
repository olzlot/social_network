import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { authUser, setUsersPhoto } from "../../redux/authReducer"
import { AppStateType } from "../../redux/store"
import styles from "./Header.module.css"
import userPhoto from './../../assets/images/userLogo.png'
import { NavLink } from "react-router-dom"
import { authAPI, profileAPI } from "../../api/social_api"





class HeaderContainer extends React.Component<HeaderContainerPropsTypes> {




  componentDidMount() {
    // axios.get<AuthResponceDataType>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //   withCredentials: true
    // })
    authAPI.authMe()
      .then((res) => {
        if (res.data.resultCode === 0) {
          this.props.authUser(res.data.data)
          // axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/ /profile/${res.data.data.id}`)
          profileAPI.getProfile(res.data.data.id)
            .then(res => this.props.setUsersPhoto(res.data.photos.small))
        }
      })
      .catch((err) => { console.log(err) })
  }


  render() {

    return <Header {...this.props} />
  }
}


const Header = (props: HeaderContainerPropsTypes) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        MY SOCIAL NETWORK
      </div>
      {props.usersLogin
        ?
        <NavLink to='/profile' className={styles.user}>
          <div>{props.usersLogin}</div>
          <div >{<img className={styles.user_photo} src={props.userPhoto !== null ? props.userPhoto : userPhoto} alt="logo" />}</div>
        </NavLink>
        : <NavLink to={'/login'} className={styles.user}>Login</NavLink>
      }
    </header>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  usersLogin: state.auth.user.login,
  userPhoto: state.auth.photo,
  // userPhoto: state.profilePage.profile.photos.small 
})

const connector = connect(mapStateToProps, { authUser, setUsersPhoto })

type HeaderContainerPropsTypes = ConnectedProps<typeof connector>

export default connector(HeaderContainer)