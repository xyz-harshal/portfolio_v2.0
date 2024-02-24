import "./styles.css";
import { CiLocationOn } from "react-icons/ci";
let Home = () => {
    return (
        <section id="Home">
            <div className="flex flex-col items-center ">
                <p className="home-header">Hi, I'm <span className="my-name">Harshal a</span></p>
                <p className="home-header my-name"> Fullstack Dev</p>
                <div className="flex flex-row home-location mt-5 mb-8 gap-2">
                    <CiLocationOn className="self-center" size={"1.5rem"} />
                    <p>Mumbai, India</p>
                </div>
                <div className="home-intro flex flex-col items-center">
                    <p>I am currently pursing BTech and building Fullstack projects which are live and used by many people.</p>
                </div>
            </div>
        </section>
    )
}
export default Home;