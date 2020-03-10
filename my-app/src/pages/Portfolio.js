import React from "react";
import "./Portfolio.css";


function Portfolio() {
    return (
        <div>
            <div className="portfolioContainer">
                <div className="projectContainer">
                    <a href="https://steelersfan254.github.io/Project1-Group5/" style={{ margin: "0", padding: "0", position: "relative" }} target="_blank">
                        <img src={require("../assets/Fanquiry.png")} className="projectImage" />
                        <div className="projectTitle">Fanquiry</div>
                    </a>
                    <div className="projectDetails">
                        <div className="descriptionBox">
                            <h3>Desciption</h3>
                            <hr />
                            <p> Fanquiry was my very first group project in coding bootcamp. The main goal for the project was to make a website using AJAX calls to at least two different APIs. This site uses the lastfm API to get artist info based on a search as well as their album info. You can than click to see upcoming shows using the ticketmaster API. This was a 3-man group project. The others were in charge of html and css while I was in charge of all the JavaScript and APIs.
                            </p>

                        </div>
                        <div className="skillsBox">
                            <h3>Learning</h3>
                            <hr />
                            <h4>New Skills Developed</h4>
                            <ul>
                                <li>Ajax calls</li>
                                <li>Dynamically created html and css with jQuery</li>
                                <li>GitHub - pushing and pulling in a group repo</li>
                            </ul>
                            <h4>Skills Improved</h4>
                            <ul>
                                <li>General JavaScript</li>
                                <li>OnClick events and input submitting</li>
                                <li>Working as a group - dividing up tasks based each group member's skills and abilities</li>
                                <li>Time management - Splitting the days into different goals set up as checkpoints to have the project finished in time</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projectContainer">
                    <a href="https://steelersfan254.github.io/Project1-Group5/" style={{ margin: "0", padding: "0", position: "relative" }} target="_blank">
                        <img src={require("../assets/livdin.png")} className="projectImage" />
                        <div className="projectTitle">LivdIn</div>
                    </a>
                    <div className="projectDetails">
                        <div className="descriptionBox">
                            <p>Desciption</p>
                        </div>
                        <div className="skillsBox">
                            <p>Skills</p>
                        </div>
                    </div>
                </div>
                <div className="projectContainer">
                    <a href="https://steelersfan254.github.io/Project1-Group5/" style={{ margin: "0", padding: "0", position: "relative" }} target="_blank">
                        <img src={require("../assets/staytogether.png")} className="projectImage" />
                        <div className="projectTitle">StayTogether</div>
                    </a>
                    <div className="projectDetails">
                        <div className="descriptionBox">
                            <p>Desciption</p>
                        </div>
                        <div className="skillsBox">
                            <p>Skills</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;
