import "./styles.css";
import ProjectItems from "./project-item";
let Project = () => {
    return (
        <section id="Project">
            <div className="skills-head flex flex-row justify-center mb-14">
                <p>{"<Projects />"}</p>
            </div>
            <div className="flex flex-col gap-10">
                <ProjectItems src="portfolio.jpg" name="Personal Portfolio" detail0="The project you see is my first ever porfolio made from scratch." detail1="Some tech stack used in this project has been used for the very first time." detail2=" Due to it i got to learn a lot of typescript." link="https://harshalkamble.vercel.app/" />
                <ProjectItems src="GPT-img.jpg" name="Chat-GPT Clone" detail0="The project is the possibly replica of Chat-GPT" detail1="The backend is not yet applied as it was just my frontend project" detail2="I wish in future to integrate the openai API to this clone" link="https://chat-gpt-harshal-ishere.vercel.app/" />
            </div>
        </section>
    )
}
export default Project;