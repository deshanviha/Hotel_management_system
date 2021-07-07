import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Our_specil(){
    return(

        <div id="features" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Our Specials</h2>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-4">
                        <div className="features-item">
                            <h3>Lorem ipsum dolor</h3>
                            <img src="images/" className="img-responsive" alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec
                                    ornare diam sed commodo.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="features-item">
                            <h3>Consecrated advising</h3>
                            <img src="img/specials/2.jpg" className="img-responsive" alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec
                                    ornare diam sed commodo.</p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="features-item">
                            <h3>Duis sed dapibus</h3>
                            <img src="img/specials/3.jpg" className="img-responsive" alt=""/>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec
                                    ornare diam sed commodo.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Our_specil;