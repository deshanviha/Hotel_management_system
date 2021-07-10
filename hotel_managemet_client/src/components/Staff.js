import React from 'react';
import './staff.css'
import staff_img from '../images/petr-sevcovic-e5Q5vWO55uU-unsplash.jpg'

function Staff() {
    return (
        <div className="staff">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-md-10 col-md-offset-1">
                            <div className="section-title">
                                <h2>
                                    Our Hospitality
                                </h2>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare
                                diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo
                                nec ornare diam commodo nibh.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare
                                diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo
                                nec ornare.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={staff_img} alt="" className="team-img"/>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Staff;