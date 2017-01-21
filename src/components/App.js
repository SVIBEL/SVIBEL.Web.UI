import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) =>
    <div>
        <h1>Filter table</h1>
        { children }
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;