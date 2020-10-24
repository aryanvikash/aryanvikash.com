import React from "react";
import Card from "./card";

export default function projects({ data }) {

  var row = Object.keys(data).map((i) => {
    if (data[i].fork === false) {
      return (
        <Card
          title={data[i].name}
          bodyText={data[i].description}
          repoLink={data[i].html_url}
          updateDate={data[i].updated_at}
        />
      );

    }
return null;
  });

  return (
    <div className="mt-5" id="projects">
      <center>
        <h3 className="text-light">projects</h3>
      </center>
      <div className="container mt-4">
        <div className="row">{row}</div>
      </div>
    </div>
  );
}
