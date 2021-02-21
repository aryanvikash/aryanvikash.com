
import Projects from "../components/projects/projects"
import axios from "axios";
import React, { useState, useEffect } from "react";
import config from "../config"

export default function projects({projects}) {
  // const uri = `https://api.github.com/users/${config.githubUsername}/repos`;
  //     const [data, setData] = useState({});

      // useEffect(() => {
      //   axios
      //     .get(uri)
      //     .then((res) => {
      //       setData(res.data);
      //     })
      //     .catch((e) => {
      //       console.log(e.message);
      //     });
      // }, [uri]);



    return(

    <div>
        <Projects data={projects} />
    </div>

    );
}

export async function getStaticProps(context) {
  const uri = `https://api.github.com/users/${config.githubUsername}/repos`;
 
    const res = await axios.get(uri)
 

  return {
    props: {projects:res.data}, // will be passed to the page component as props
  }
}