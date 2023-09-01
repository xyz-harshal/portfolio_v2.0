import "./styles.css";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { BsFiletypeXml, BsFiletypeCss ,BsArrowRightSquare} from "react-icons/bs";
import { BiLogoJavascript,BiLogoTypescript } from "react-icons/bi";
let ProjectItems = (props) => {
    return (
        <div className="inline-flex flex-row project-item-div gap-10 flex-wrap justify-evenly">
            <div className="project-img">
                <a href={props.link}><img src={require("../../../img/" + props.src)} /></a>
            </div>
            <div className="project-details flex flex-col gap-6 flex-wrap">
                <p className="pro-item-head">{props.name}</p>
                <div className="flex flex-row projects-tech gap-4 items-center">
                    <FaReact />
                    <BiLogoTypescript />
                    <BsFiletypeXml />
                    <BsFiletypeCss />
                    <BiLogoJavascript />
                    <FaBootstrap />
                </div>
                <div className="pro-item-details">
                <p>{props.detail0}</p>
                <p>{props.detail1}</p>
                <p>{props.detail2}</p>
                </div>
                <a href={props.link}><BsArrowRightSquare size={"1.5rem"}/></a>
            </div>

        </div>
    )
}
export default ProjectItems;