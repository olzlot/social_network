import React from "react";
import { NavLink } from "react-router-dom";
import { SidebarPageType } from "../../redux/sidebarReducer";
import { MyFriends } from "./MyFriends/MyFriends";
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

export type NavBarType = {
  sidebar: SidebarPageType
}

const NavBar: React.FC<NavBarType> = ({
  sidebar, ...restProps
}) => {
  return (
    <nav className={s.nav}>
      <div>
        <NavItem link={'Profile'} to={'/profile'} />
        <NavItem link={'Messages'} to={'/dialogs'} />
        <NavItem link={'News'} to={'/news'} />
        <NavItem link={'Music'} to={'/music'} />
        <NavItem link={'Settings'} to={'/settings'} />
      </div>
        <MyFriends friends={sidebar.myFriendsList}>Here are my friends</MyFriends>
    </nav>
  );
}

export default NavBar