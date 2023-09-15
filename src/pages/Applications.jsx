import React from "react";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./Applications.css";

const Applications = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchAllApplications = async () => {
      try {
        const res = await axios.get(
          "https://8922-2402-3a80-1397-2632-28f2-a53c-3f42-beec.ngrok-free.app/applications"
        );
        setApplications(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllApplications();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="applications">
        {applications.map((application) => (
          <div key={application.id} className="application">
            <h2>
              Name: {application.first_name} {application.last_name}
            </h2>
            <h4>
              Course: {application.course} Score: {application.score}
            </h4>
            <p>Contact : {application.email}</p>
            <p>Date: {application.applied_date}</p>
            <a href={application.resume_url}>
              <span>Resume</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
