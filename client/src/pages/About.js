import React from "react";
import "./About.css";


function About() {
    return (
        <div>
            <div className="card">
                <div className="cardBody">
                    <img src={require("../assets/self.jpeg")} alt="me" id="selfie" />
                    <div className="cardTitle">
                    <h1>About Me</h1>
                    </div>
                    <hr />
                    <h2>Get to know me</h2>
                    <p>I'm a certified, full stack web developer. Raised in Killeen, TX, I'm currently living in the Austing area. I went to Texas State for a couple years. I joined the Pi Kappa Phi fraternity and majored in finance until I realized that just wasn't what I wanted to do with my life. Playing videogames and sports are probably my two favorite hobbies but I also like to play piano, and do magic tricks and I'm really into board games when I have people to play with. Traveling has never been my thing but I would love to start. Friends are important to me so going out with them is how I like to spend my time the most. I'm also a huge movie buff. Steelers Nation!
                    </p>
                    <h2>Coding</h2>
                    <p>
                        After realizing that I didn't want to major in finance, I was going to switch to computer science. However, it would've set me back a couple years and I basically would've had to start all over. That led me to the coding bootcamp at The University of Texas. The specific course I took was a full stack web development class.
                        As of now, I'm honing my skills in the technologies we learned during the bootcamp but I soon want to learn python because it seems like a language everyone should know and C++ because I like to play videogames and want to pick up videogame development as a hobby. Cyber security has always peaked my interest as well so I make take a look into that.
                    </p>

                    <h2>The future</h2>
                    <p>Right now I'm focusing on finding a career in the coding industry. I would like to stay in the Austin area but I may be open to oppurtunities elsewhere. Was I find a career, my plan is to go back to school part time to get my degree. That and saving up to buy a house will be my two main goals.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
