import "./styles.css";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { BsFiletypeXml, BsFiletypeCss } from "react-icons/bs";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
let Skills = () => {
    return (
        <section id="Skills">
            <div className="skills-head flex flex-row justify-center mb-14">
                <p>{"<Skills />"}</p>
            </div>
            <div className="skills-main flex flex-row justify-center gap-14 py-2">
                <div className="tech-head-name">
                    <p>FRONT END TECH</p>
                </div>
                <div className="tech-head-items flex flex-row tech-logo items-center gap-14">
                    <FaReact />
                    <BiLogoTailwindCss />
                    <BsFiletypeXml />
                    <BsFiletypeCss />
                    <BiLogoJavascript />
                    <FaBootstrap />
                </div>
            </div>
        </section>
    )
}
export default Skills;
