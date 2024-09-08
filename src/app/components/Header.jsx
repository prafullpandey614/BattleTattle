"use client";
import React, { useState } from "react";
import styles from "../css/header.module.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import MenuIcon from "@mui/icons-material/Menu";
// Load the font with specific subsets
const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    console.log("Clicked")
    setShowMenu(!showMenu);
  };
  return (
    <>
    <nav className={`${styles.nav}` + ` ${inter.className}`}>
      <div className={styles.logo}>
      <Link className={styles.no_underline} href="http://localhost:3000/">
        <b>BT</b>
      </Link>
      <p>Battle of Tattle</p>

      </div>
      <div className={styles.menuicon} >
        <MenuIcon style={{ fontSize: 50, color: "#00E35E" }} onClick={handleClick}/>
        
      </div>
      

      <div className={styles.link}>
        <h4> <Link href="http://localhost:3000/vision" className={styles.no_underline} >Vision</Link> </h4>
        <h4> <Link  className={styles.no_underline} href="">T&C</Link> </h4>
        <h4>Careers</h4>
        <button className={styles.signin}>Get In</button>
        {/* <Button />Get In</Button> */}
      </div>
      
    </nav>
    {showMenu && (
        <div className={styles.menu_box}>
          <h4>Vision</h4>
          <h4>Terms & Conditions</h4>
          <h4>Careers</h4>
          <button className={styles.signin}>Get In</button>
        </div>
      )}
    </>

  );
};

export default Header;
