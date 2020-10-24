

import config from "../config";
// import ReactTypingEffect from 'react-typing-effect'
import ReactTypingEffect from "../vendor/react-typing-effect/src/lib";

export default function Hero() {
  function AlertIt() {
    if (window.confirm("open Telegram?"))
      window.location = `https://t.me/${config.tgUsername}`;
  }

  return (
    <div className={"container mt-5"}>
      <h3>
        <kbd className={"text-light"}>{config.heroHead}</kbd>
        <br />
           <code className="text-light">{config.heroText}</code>
          <div>
            <span className="badge badge-warning">
              <ReactTypingEffect
          eraseDelay={1}
          speed={150}
          eraseSpeed ={2500}
          typingDelay={0}
        text={config.typedArray}
      />
            </span>

         </div>
      </h3>

      <button
        className={"btn btn-primary btn-md active mt-4"}
        onClick={() => AlertIt()}
      >
        Telegram me
      </button>
    </div>
  );
}
