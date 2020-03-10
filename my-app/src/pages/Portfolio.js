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
                            <h3>Desciption</h3>
                            <hr />
                            <p> LivdIn was my second group project in the coding bootcamp. The requirements of this project were to use at least two APIs from other sites and store and retrieve info in a mySQL database. If you are searching for a new home, this website is designed to help with that process. You can search for home listings through the realtor API on rapidapi.com. The unique thing about this website is you can create and an account and leave reviews of places you lived and read reviews of potential new homes. Real estate agents or landlords aren't going to share the negatives and smaller things that come with living in a house so that's where LivdIn comes in to get that insight you couldn't get before. This was a 4-man group and my main job for this project was reseaching and incorporating the realtor API as well having helping with the map we rendered with the leaflet API. I also helped with search bar and inputting and parsing addresses.
                            </p>
                        </div>
                        <div className="skillsBox">
                            <h3>Learning</h3>
                            <hr />
                            <h4>New Skills Developed</h4>
                            <ul>
                                <li>MySQL database</li>
                                <li>Sequelize models</li>
                                <li>CRUD actions</li>
                                <li>Connecting the frontend to the backend</li>
                                <li>Travis CI</li>
                                <li>Understanding different stages of development</li>
                                <li>Axios</li>

                            </ul>
                            <h4>Skills Improved</h4>
                            <ul>
                                <li>Understanding and being able to use the APIs provided on rapidapi.com</li>
                                <li>API syntax</li>
                                <li>Understanding how to configure the server</li>
                                <li>CSS</li>
                                <li>Understanding error messages</li>
                            </ul>
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
                            <h3>Desciption</h3>
                            <hr />
                            <p> StayTogether is was the final project of my coding bootcamp. Orginally, I partnered with someone else to do this project but ended up doing it on my own. This is where I really brought all my skills that I learned throughout bootcamp together. This was an actual idea of a website that I had even before I started to learn how to code so to be able to actually be able build it is a cool experience. I will continue to work on this project and use it to improve on things I've already learned and incorporate new technologies I continue to learn. StayTogether is a social media site for your family. It serves as a central hub for everything going on in your family. If the user wants to let everyone know they made straight A's, they can do so in the announcement feed or if they want to plan a vaction and see whose going, they can do so by creating an event about it. As I said before, this is a project I will continue to work on and sometimes it might not be working because I'm changing things. I'll try to add an "Under Construction" image when I am. However, in case I forget, you know why the site might not be functioning.
                            </p>
                        </div>
                        <div className="skillsBox">
                            <h3>Learning</h3>
                            <hr />
                            <h4>New Skills Developed</h4>
                            <ul>
                                <li>Bootsrap</li>
                                <li>User Authentication (Login/Logout/Sign up)</li>
                                <li>React</li>
                                <li>Get requests sorted by info in different rows</li>
                                <li>React-router-dom</li>
                                <li>React UseContext</li>
                                <li>React UseState</li>
                                <li>React UseEffect</li>
                            </ul>
                            <h4>Skills Improved</h4>
                            <ul>
                                <li>CSS</li>
                                <li>Connecting the front end to the backend</li>
                                <li>MySQL</li>
                                <li>Sequelize models</li>
                                <li>Understanding development environments</li>
                                <li>Array mapping and sorting</li>
                                <li>Understanding and being able to research error messages</li>
                                <li>CRUD actions</li>
                                <li>Wireframe</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Portfolio;
