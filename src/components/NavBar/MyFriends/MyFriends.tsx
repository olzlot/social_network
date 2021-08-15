import { FriendType } from "../../../redux/sidebarReducer"

export type MyFriendPropsType = {
    friends: FriendType[]
    children?: string
}

const MyFriendsWrapper = {
    backgroundColor: 'white',
    borderRadius: '5px',
    fontSize: '12px'

}
const MyFriendsStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',

}

const defaultLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswbd4IuPds60iBRTRHRZ4AgiSiHDoP-zVLg&usqp=CAU'

const MyFriend: React.FC<FriendType> = ({ id, name, logoSrc }) => {
    return (
        <div style={{display:'inline-block', margin:'2px 5px'}}>
            <img style={MyFriendsStyle} src={logoSrc ? logoSrc : defaultLogo} alt={id}/>
            <p>{name}</p>
        </div>
    )
}

export const MyFriends: React.FC<MyFriendPropsType> = ({ friends, children }) => {

    const frindsListForShow = friends.map(f => <MyFriend key={f.id} id={f.id} name={f.name} logoSrc={f.logoSrc} />)

    return (

        <div style={MyFriendsWrapper}>
            <p>
                Here are my friends
            </p>
            {frindsListForShow}
        </div>
    )
}