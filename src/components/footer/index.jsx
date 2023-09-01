import "./styles.css";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
let Fotter = () => {
    return (
        <div className="fotter flex flex-row justify-between flex-wrap gap-4">
            <div className="lefty">
                <p>I do like bringing like Minded People Together</p>
                <a href="mailto:11.sync.er@gmail.com">11.sync.er@gmail.com</a>

            </div>
            <div className="rightyyy flex flex-row gap-6">
                <a href="https://twitter.com/harshal_ishere/"><BsTwitter color={"white"} size={"1.4rem"} /></a>
                <a href="https://www.linkedin.com/in/harshal-ishere/"><BsLinkedin color={"white"} size={"1.4rem"} /></a>
                <a href="https://github.com/harshal-ishere/"><BsGithub color={"white"} size={"1.4rem"} /></a>
            </div>
        </div>

    )
}
export default Fotter;