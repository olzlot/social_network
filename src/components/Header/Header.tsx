import React from "react"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        MY SOCIAL NETWORK
      </div>
    </header>
  )
}

export default Header