import ReactDOM from "react-dom";
import Links from "./Links";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
function Footer() {
    return ReactDOM.createPortal(<footer className="d-flex align-items-center p-5 fs-6" id="contacts">

        <Links />
        <div className="ms-auto fs-3 d-flex align-items-center">
            <a href="https://github.com/SirotkinaAnna" className="pe-3"> <AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/anna-sirotkina-1205a2240/"><AiFillLinkedin /></a>
        </div>

    </footer>, document.body)
}
export default Footer;