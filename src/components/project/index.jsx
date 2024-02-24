import "./styles.css";
import ProjectItems from "./project-item";
import { data } from "./data";
let Project = () => {
    return (
        <section id="Project">
            <div className="skills-head flex flex-row justify-center mb-14">
                <p>{"<Projects />"}</p>
            </div>
            <div className="flex flex-col gap-10">
                {data.map((item, index) => {
                    return (
                        <ProjectItems key={index} src={item.src} name={item.name} detail0={item.detail0} detail1={item.detail1} detail2={item.detail2} link={item.link} glink={item.glink} stack={item.stack} />
                    )
                })}
            </div>
        </section>
    )
}
export default Project;