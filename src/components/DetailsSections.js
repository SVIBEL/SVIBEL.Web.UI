import React from 'react';


const DetailsSections = () =>
   <section id="features" className="features bg-primary">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="section-heading">
                        <h2>Our Work</h2>
                        <p className="text-muted">Check out our vast array of expertese!</p>
                        <hr/>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-screen-smartphone text-primary"></i>
                                    <h3>Development</h3>
                                    <p className="text-muted">High quality code.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-camera text-primary"></i>
                                    <h3>Business Analysis</h3>
                                    <p className="text-muted">Put an image, video, animation, or anything else in the screen!</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-present text-primary"></i>
                                    <h3>UX</h3>
                                    <p className="text-muted">As always, this theme is free to download and use for any purpose!</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="feature-item">
                                    <i className="icon-lock-open text-primary"></i>
                                    <h3>Marketing</h3>
                                    <p className="text-muted">Since this theme is MIT licensed, you can use it commercially!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </section>;


export default DetailsSections;