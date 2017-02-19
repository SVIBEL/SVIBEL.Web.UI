import React from 'react';

const MainHero = () =>
    <header>
        <div className="container">
            <div className="row">
                

                <div className="col-xs-12 col-sm-6">
                    <img className="img-responsive hero-profile" src="../../media/peter.JPG"/>
                </div>
                <div className="col-xs-12 col-sm-6">
                    <img className="img-responsive hero-profile" src="../../media/akos.JPG"/>
                </div>
                
                <div className="container brand">
                    <div className="col-sm-12">
                            <img className="img-logo" src='../../media/logo.png' />
                    </div>

                    <div className="col-md-2 col-md-offset-5">
                            <div className="brand-names">
                                <div className="brand-item">PETER</div> 
                                <div className="brand-item brand-plus"><i className="fa fa-plus" /></div> 
                                <div className="brand-item">AKOS</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </header>;


export default MainHero;