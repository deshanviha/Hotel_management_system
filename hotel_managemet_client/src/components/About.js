import React from "react";
import './about.css';
import image from '../images/patrick-tomasso-GXXYkSwndP4-unsplash.jpg'

function About() {


    return (
        <div className="about">

            <div className="row">

                <div className="col-md-6">
                    <img src={image} alt="" className="about-img"/>
                </div>
                <div className="col-md-6">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="section-title">
                            <h2>
                                Our Story
                            </h2>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec
                            ornare
                            diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus
                            leo
                            nec ornare diam commodo nibh.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec
                            ornare
                            diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus
                            leo
                            nec ornare.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About