import React from 'react';

const MainHero = () =>
    <header>
        <div className="container">
            <div className="row">
                

                <div className="col-sm-6">
                    <img className="img-responsive hero-profile" src="http://carelpiethein.com/en/images/image-carel.jpg"/>
                </div>
                <div className="col-sm-6">
                    <img className="img-responsive hero-profile" src="http://carelpiethein.com/en/images/image-piet.jpg"/>
                </div>
                
                <div className="container brand">
                    <div className="col-sm-12">
                            <img className="" src='../../media/logo.png' />
                    </div>

                    <div className="col-md-2 col-md-offset-5">
                            <div className="brand-names" style={{'margin-left': '55px'}}>
                                <div style={{float:'left'}}>PETER</div> 
                                <div className="brand-plus" style={{float:'left'}}><i className="fa fa-plus" /></div> 
                                <div style={{float:'left'}}>AKOS</div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </header>;


export default MainHero;