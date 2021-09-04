import { NavLink } from "react-router-dom";
import { MyFriendsContainer } from "./MyFriends/MyFriendsContainer";
import s from "./NavBar.module.css"



export type NavItemPropsType = {
  link: string
  to: string
}

function NavItem(props: NavItemPropsType) {
  return (
    <div className={s.item}>
      <NavLink to={props.to} activeClassName={s.active}>{props.link}</NavLink>
    </div>
  );

}



const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavItem link={'Profile'} to={'/profile'} />
        <NavItem link={'Messages'} to={'/dialogs'} />
        <NavItem link={'Users'} to={'/users'} />
        <NavItem link={'News'} to={'/news'} />
        <NavItem link={'Music'} to={'/music'} />
        <NavItem link={'Settings'} to={'/settings'} />
      </div>
        <MyFriendsContainer/>
    </nav>
  );
}

export default NavBar