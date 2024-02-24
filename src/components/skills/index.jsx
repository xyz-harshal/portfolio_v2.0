import "./styles.css";
import { FaReact } from "react-icons/fa";
import { BiLogoJavascript, BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandNextjs,TbBrandCpp  } from "react-icons/tb";
import { SiSvelte,SiTypescript,SiExpress,SiMongodb,SiNodedotjs  } from "react-icons/si";
let Skills = () => {
    return (
        <section id="Skills" className="flex flex-col justify-center gap-12">
            <div className="skills-head flex flex-row justify-center">
                <p>{"<Skills />"}</p>
            </div>
            <div className="skills-main flex flex-row justify-center gap-14 py-2">
                <div className="tech-head-name">
                    <p>FRONT END TECH</p>
                </div>
                <div className="tech-head-items">
                    <SiSvelte />
                    <FaReact />
                    <TbBrandNextjs />
                    <BiLogoTailwindCss />
                </div>
            </div>
            <div className="skills-main flex flex-row justify-center gap-14 py-2">
                <div className="tech-head-name">
                    <p>BACK END TECH</p>
                </div>
                <div className="tech-head-items">
                    <SiExpress />
                    <SiNodedotjs />
                    <SiMongodb />
                </div>
            </div>
            <div className="skills-main flex flex-row justify-center gap-14 py-2">
                <div className="tech-head-name">
                    <p>PROGRAMMING LANGS</p>
                </div>
                <div className="tech-head-items">
                    <TbBrandCpp />
                    <BiLogoJavascript />
                    <SiTypescript />
                </div>
            </div>
        </section>
    )
}
export default Skills;
