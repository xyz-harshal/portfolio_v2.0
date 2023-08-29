import "./styles.css";
import { CiLocationOn } from "react-icons/ci";
let Home = () => {
    return (
        <section id="Home">
            <div className="flex flex-col items-center ">
                <p className="home-header">Hi, I'm <span className="my-name">Harshal</span></p>
                <div className="flex flex-row home-location mt-5 mb-8 gap-2">
                    <CiLocationOn className="self-center" size={"1.2rem"} />
                    <p>Mumbai, India</p>
                </div>
                <div className="home-intro flex flex-col items-center">
                    <p>I am currently studing at VJTI Mumbai, currently involved in making frontend projects and To become a Full Stack developer is my desire.</p>
                </div>
            </div>
        </section>
    )
}
export default Home;