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
                            <p>Desciption</p>
                        </div>
                        <div className="skillsBox">
                            <p>Skills</p>
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
