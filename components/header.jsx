import config from "../config";
import Link from "next/link";


export default function Customhead() {


  return (
    <div id="home">
      <nav className="navbar navbar-light bg-dark">
        <Link href="/">
          <a className={"navbar-brand logo"} >
            <img
              src="https://telegra.ph/file/63a3bececc4d3f5ca7d81.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Jigar Varma"
            />
            <kbd id="username">{config.websiteName}</kbd>
          </a>
        </Link>

        <Link href="/projects" as="/projects">
          <a className={"btn btn-outline-light"}>Projects</a>
        </Link>
      </nav>
    </div>
  );
}
