
import Projects from "../components/projects/projects"
import axios from "axios";
import React, { useState, useEffect } from "react";
import config from "../config"

export default function projects() {
      const uri = `https://api.github.com/users/${config.githubUsername}/repos`;
      const [data, setData] = useState({});

      useEffect(() => {
        axios
          .get(uri)
          .then((res) => {
            setData(res.data);
          })
          .catch((e) => {
            console.log(e.message);
          });
      }, [uri]);



    return(

    <div>
        <Projects data={data} />
    </div>

    );
}
