import React from 'react';


const DetailsSections = () =>
    <div>
        <section id="team" className="features bg-primary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="section-heading">
                            <h2>Team</h2>
                        </div>
                    </div>
                </div>
                <div id="who-we-are" className="row">
                    <div className="col-md-12">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="feature-item">
                                        <img className="profile img-circle img-gray" src="../../media/peter_profile.JPG"/>
                                        <h3>Peter Svitz</h3>
                                        <p className="text-muted">
                                            Peter is responsible for the oversight of all aspects of product development, platform strategy, product design, as well as oversight of Svibel's Engineering capabilities.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-item">
                                        <img className="profile img-circle img-gray" src="../../media/akos_profile.JPG"/>
                                        <h3>Akos Beleznay</h3>
                                        <p className="text-muted">
                                            Akos is responsible for the management of business operations and analysis, CRM, as well as the marketing strategies of Svibel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="features who-we-are">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-center pull-right">
                        <div className="section-heading">
                            <h2>Who We Are</h2>
                        </div>
                        <div>
                            <p>
                                At Svibel we create intuitive software applications in complex domains. Our experienced team challenges assumptions, yet work in partnership, to deliver truly innovative solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        

    </div>;


export default DetailsSections;