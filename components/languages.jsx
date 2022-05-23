import config from "../config";

export default function Languages() {
  return (
    <div className="techstack">
      {config.stacks.map((stack) => {
        return (
          <div key={stack.name}>
            <div className="lang">
              <h1>
                <span className="badge badge-danger">{stack.name}</span>
              </h1>
            </div>

            <div className="grid-flex">
              {stack.items.map((item) => {
                return (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`${stack.name}-${item.name}`}
                  >
                    <img src={item.imageUrl} />
                  </a>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
