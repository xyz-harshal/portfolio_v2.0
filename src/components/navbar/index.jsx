import "./styles.css";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import {useState} from "react";
let Navbar = () => {
    let [navToggle,setNavToggle]=useState(false);
    return (
        <section id="Navbar">
            <div className="navbar flex flex-row gap-x-8 justify-between">
                <div className="flex flex-row">
                    <p>harshal</p>
                </div>
                    <GiHamburgerMenu size={"1.5rem"} className={navToggle?" invincible ":" self-center hamburger "} onClick={()=>setNavToggle(!navToggle)} />
                    <GiCancel size={"1.5rem"} className={navToggle?"self-center cancel":"invincible"} onClick={()=>setNavToggle(!navToggle)} />

                <div className="flex flex-row justify-center gap-x-8 navbar-items">
                    <p>home</p>
                    <p>skills</p>
                    <p>projects</p>
                    <p>about</p>
                </div>
            </div>
            <div className={navToggle?"toggle-dropdown":" invincible"}>
                <p className="py-1">home</p>
                <p className="py-1">skills</p>
                <p className="py-1">projects</p>
                <p className="py-1">about</p>
            </div>
        </section>
    )
}
export default Navbar;