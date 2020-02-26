import React from "react";
import "./Portfolio.css";


function Portfolio() {
    return (
        <div>
            <div className="portfolioBox">
                <div className='portfolioLink'><a href="https://steelersfan254.github.io/Project1-Group5/" style={{ textDecoration: "none", color: "white" }} target="_blank">Fanquiry</a></div>
                <div className='portfolioLink' ><a href="https://livdin.herokuapp.com/" style={{ textDecoration: "none", color: "white" }} target="_blank">LivdIn</a></div>
            </div>
        </div>
    );
}

export default Portfolio;
