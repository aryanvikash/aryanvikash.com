import config from "../config";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Customhead() {
const router = useRouter();
     const handleClick = (e) => {
       e.preventDefault();
       router.push("/test");
     };

  return (
    <div id="home">
      <nav className="navbar navbar-light bg-dark">
        <Link href="/">
          <a className={"navbar-brand logo"} onClick={handleClick}>
            <img
              src="./code.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="aryanvikash"
            />
            <kbd id="username">{config.websiteName}</kbd>
          </a>
        </Link>

        <Link href="projects" as="projects">
          <a className={"btn btn-outline-light"}>Projects</a>
        </Link>
      </nav>
    </div>
  );
}
