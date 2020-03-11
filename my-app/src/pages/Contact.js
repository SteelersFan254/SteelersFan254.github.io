import React from "react";
import "./Contact.css";


function Contact() {
  return (
    <div>
      <div className="contactContainer">
        <div className="businessDiv">
          <p>Phone Number: (254) 449-6805</p>
          <p>Email: <a href="mailto:rcborja.business@gmail.com" style={{ textDecoration: 'none', color: "white" }}>rcborja.business@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/SteelersFan254" style={{ textDecoration: 'none', color: "white" }} target="_blank">SteelersFan254</a></p>
        </div>
        <div style={{ height: "300px", width: "2px", backgroundColor: "white", margin: "auto 0" }} />
        <div className="socialMediaDiv">
          <a href="" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-linkedin"></a>
          <a href="#" class="fa fa-instagram"></a>


        </div>
      </div>
    </div>
  );
}

export default Contact;
