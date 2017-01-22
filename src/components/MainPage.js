import React from 'react';

import MainHero from './MainHero';
import DetailsSections from './DetailsSections';
import Contact from './Contact';




const MainPage = () =>
    <div className="frame-wrapper">
        <MainHero />
        <DetailsSections/>
        <Contact />
    </div>;


export default MainPage;