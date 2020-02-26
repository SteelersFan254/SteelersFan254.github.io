import React from "react";
import "./About.css";


function About() {
    return (
        <div>
            <div className="card">
                <img src={require("./self.jpeg")} alt="me" id="pic" style={{ float: "right" }} />
                    <div className="card-body">
                        <h5 className="card-title">About Me</h5>
                        <p className="aboutMe">Hello. I'm an aspiring full stack web developer. I'm currently looking for a job in the Austin area. Once I find a job, my plan is to go back
                            to school and take a class or two each semester until I finish my degree. Saving for a house will be my other goal. My hobbies, are playing videogames and sports,
                            traveling, magic tricks, and going out. It doesn't matter what I'm doing as long as it is with friends. I'm also a huge movie buff!
                        </p>
                    </div>
            </div>
        </div>
            );
          }
          
          export default About;
