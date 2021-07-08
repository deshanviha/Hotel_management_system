import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import special1 from '../images/img-2.jpg';
import special2 from '../images/bundo-kim-Pb9bUzH1nD8-unsplash.jpg';
import special3 from '../images/jonathan-petit-OM15bkc6Sec-unsplash.jpg'
import './ourSpecial.css'

function Our_specil() {
    const myStyle = {
        width: '300px',
        height: '400px',
    };

    return (
        <div className='special_primary'>
            <div id="features" className="text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4">
                            <div className="features-item">
                                <h3>Excellent Service</h3>
                                <img src={special1} className="img-responsive" alt="" style={myStyle}/>
                                <p>All great deeds and all great thoughts have a ridiculous beginning. Great works are
                                    often born on a street corner or in a restaurant's revolving door.</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <div className="features-item">
                                <h3>Better Experience</h3>
                                <img src={special2} className="img-responsive" alt="" style={myStyle}/>
                                <p>In a restaurant one is both observed and unobserved. Joy and sorrow can be displayed
                                    and observed "unwittingly," the writer scowling naively and the diners wondering,
                                    What the hell is he doing?</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-4">
                            <div className="features-item">
                                <h3>Be With Your Relations</h3>
                                <img src={special3} className="img-responsive" alt="" style={myStyle}/>
                                <p>Eating at fast food outlets and other restaurants is simply a manifestation of the
                                    commodification of time coupled with the relatively low value many Americans have
                                    placed on the food they eat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Our_specil;