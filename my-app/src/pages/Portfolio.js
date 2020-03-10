import React from "react";
import "./Portfolio.css";
import PortLink from "../components/PortLink"


function Portfolio() {
    return (
        <div>
            <div className="portfolioContainer">
                <div className="projectContainer">
                    <div className='portfolioLink'><a href="https://steelersfan254.github.io/Project1-Group5/" style={{ textDecoration: "none", color: "white" }} target="_blank">Fanquiry</a></div>
                </div>
                <div className="projectContainer">
                    <div className='portfolioLink' ><a href="https://livdin.herokuapp.com/" style={{ textDecoration: "none", color: "white" }} target="_blank">LivdIn</a></div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
