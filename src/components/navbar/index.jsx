import "./styles.css";
import { GiHamburgerMenu} from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";
let Navbar = () => {
    let [navToggle, setNavToggle] = useState(false);
    return (
        <>
        <section id="Navbar">
            <div className="navbar flex flex-row gap-x-8 justify-between">
                <div className="flex flex-row justify-center">
                    <p className="navu-head">SYNC</p>
                </div>
                <GiHamburgerMenu size={"1.5rem"} className={navToggle ? " invincible " : " self-center hamburger  "} onClick={() => setNavToggle(!navToggle)} />
                <IoCloseOutline size={"1.5rem"} className={navToggle ? "self-center cancel" : "invincible"} onClick={() => setNavToggle(!navToggle)} />

                <div className="gap-x-8 top-nav-bar-items">
                    <a href="#Home"><p>home</p></a>
                    <a href="#Skills"><p>skills</p></a>
                    <a href="#Project"><p>projects</p></a>
                    <a href="#About"><p>about</p></a>
                </div>
            </div>
            <div className={navToggle ? "toggle-dropdown" : " invincible"}>
                <a href="#Home"><p className="py-3">home</p></a>                
                <a href="#Skills"><p className="py-3">skills</p></a>               
                <a href="#Project"><p className="py-3">projects</p></a>
                <a href="About"><p className="py-3">about</p></a>              
            </div>
        </section>
        </>
    )
}
export default Navbar;