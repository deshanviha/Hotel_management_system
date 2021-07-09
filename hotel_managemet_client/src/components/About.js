import React from "react";
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg'

function About() {


    return (
        <div className="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12 col-md-6 "/>
                    <img src={image} alt="" className="about-img"/>
                    <div className="col-xs-12 col-md-4 ">
                        <div className="about-text">
                            <div className="section-title">
                                <h2>Our Story</h2>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare
                                diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo
                                nec ornare diam commodo nibh.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare
                                diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo
                                nec ornare.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About