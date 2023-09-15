// import React from "react";
// import Navbar from "../components/Navbar";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";
// import "./Home.css";

// const Home = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     const fetchAllJobs = async () => {
//       try {
//         const res = await axios.get(
//           "https://e9c1-2402-3a80-1397-2632-28f2-a53c-3f42-beec.ngrok-free.app/jobs"
//         );
//         setJobs(res.data);
//         console.log(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchAllJobs();
//   }, []);
//   return (
//     <div>
//       Hello World
//       <Navbar />
//       <div className="jobs">
//         {jobs.map((job) => (
//           <div key={job.id} className="job">
//             <h2>{job.company_name}</h2>
//             <h4>{job.post}</h4>
//             <p>Skills required : {job.description}</p>
//             <hr />
//             <p>Location: {job.location}</p>
//             <p>Salary:{job.salary}</p>
//             <p>Posted at: {job.date}</p>
//             <p>Contact : {job.contact}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  // useEffect(() => {
  //   const fetchAllJobs = async () => {
  //     try {
  //       const res = await axios.get(
  //         "https://8922-2402-3a80-1397-2632-28f2-a53c-3f42-beec.ngrok-free.app/jobs/"
  //       );
  //       console.log(res.data);
  //       setJobs(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchAllJobs();
  // }, []);
  useEffect(() => {
    const fetchJobs = async () =>
      await fetch(
        "https://8922-2402-3a80-1397-2632-28f2-a53c-3f42-beec.ngrok-free.app/jobs"
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setJobs(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    fetchJobs();
  }, []);

  return (
    <div>
      Hello World
      <Navbar />
      <div className="jobs">
        {Array.isArray(jobs) && jobs.length > 0 ? (
          jobs.map((job) => (
            <div key={job.id} className="job">
              <h2>{job.company_name}</h2>
              <h4>{job.post}</h4>
              <p>Skills required : {job.description}</p>
              <hr />
              <p>Location: {job.location}</p>
              <p>Salary:{job.salary}</p>
              <p>Posted at: {job.date}</p>
              <p>Contact : {job.contact}</p>
            </div>
          ))
        ) : (
          <p>Loading jobs...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
