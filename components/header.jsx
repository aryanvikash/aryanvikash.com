import config from "../config";
import Link from "next/link"
// import ReactTypingEffect from "react-typing-effect";
import ReactTypingEffect from "../vendor/react-typing-effect/src/lib";
export default function Customhead() {
  return (
    <div id="home">
      <nav className="navbar navbar-light bg-dark">
        <Link href="/">
          <a className={"navbar-brand logo"}>
            <img
              src="./code.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="aryanvikash"
            />
            <kbd id="username">
              {<ReactTypingEffect text={config.websiteName} />}
              <span className="text-danger font-weight-bolder">|</span>{" "}
            </kbd>
          </a>
        </Link>

        <Link href="/projects">
          <a className={"btn btn-outline-light"} role="button">
            Projects
          </a>
        </Link>
      </nav>
    </div>
  );
}
