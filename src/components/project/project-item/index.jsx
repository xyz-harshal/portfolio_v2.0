import "./styles.css";
import {FaGithub } from "react-icons/fa";
import {BsArrowRightSquare } from "react-icons/bs";
let ProjectItems = (props) => {
    return (
        <div className="inline-flex flex-row project-item-div gap-10 flex-wrap justify-evenly">
            <div className="project-img">
                <a href={props.link}><img src={require("../../../img/" + props.src)} alt='data' /></a>
            </div>
            <div className="project-details flex flex-col gap-6 flex-wrap">
                <p className="pro-item-head">{props.name}</p>
                <div className="flex flex-row projects-tech gap-4 items-center">
                    {props.stack.map((item, index) => { return <div key={index}>{item}</div> })}
                </div>
                <div className="pro-item-details">
                    <p>{props.detail0}</p>
                    <p>{props.detail1}</p>
                    <p>{props.detail2}</p>
                </div>
                <div className="flex flex-row justify-start items-start gap-6">
                    <a href={props.glink} target="_blank"><FaGithub size={"1.6rem"} /></a>
                    <a href={props.link} target="_blank"><BsArrowRightSquare size={"1.6rem"} /></a>
                </div>
            </div>

        </div>
    )
}
export default ProjectItems;