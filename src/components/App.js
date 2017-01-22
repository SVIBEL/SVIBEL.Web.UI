import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import Navigation from './Navigation';
import Footer from './Footer';


const App = ({ children }) =>
    <div className="frame-wrapper">
        <Navigation/>
        
        { children }
        
        <Footer />
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;