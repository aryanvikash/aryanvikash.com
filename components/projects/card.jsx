import React from "react";

export default function card(props) {
  var desc ;
  if (!props.bodyText) {
    desc = <p className="card-text text-danger">Not Avalible</p>;
  } else {
     desc = <p className="card-text ">{props.bodyText}</p>;
  }
  return (
    <div className="col-sm-6  col-md-4 col-lg-3 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {desc}

          <div className="card-footer text mt-2">Last {props.updateDate}</div>
          <div className="card-footer">
          <a href={props.repoLink} className="btn btn-success text-light">
            <img

              src={
                "https://img.icons8.com/material-outlined/24/000000/github.png"
              }
              alt="github"
            />{" "}
            Checkout
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}
