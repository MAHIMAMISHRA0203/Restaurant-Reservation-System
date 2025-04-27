import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
return (
    <>
    <section className="about" id="about">
        <div className="container">
        <div className="banner">
            <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <br/>
            <p>The only thing we're serious about is food.</p>
            <br />Welcome to <strong>SIT.EAT.REPEAT</strong>, where we believe in serving delicious food with a side of great memories. Our team of passionate food lovers is dedicated to creating an exceptional dining experience for every guest. Whether you're here to celebrate a special occasion or simply enjoy a delicious meal, we offer a warm, welcoming atmosphere and a menu crafted with care. Join us for an unforgettable experience – great food, great service, and even better company!
            </div>
            <p className="mid">
           
            </p> 
        </div>
        <div className="banner">
            <img src="https://images.unsplash.com/photo-1711633648895-f5df0336ff55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="about" />
        </div>
        </div>
    </section>
    </>
);
};

export default About;