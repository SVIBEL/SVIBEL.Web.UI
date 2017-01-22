import React from 'react';
import ReactDOM from 'react-dom';

class Navigation extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            headerHasTint:false,
        };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

  handleScroll(event) {
        let scrollTop = event.srcElement.body.scrollTop
        let itemTranslate = Math.min(0, scrollTop/3 - 60) === 0;
        this.setState({
            headerHasTint: itemTranslate
        });
    };
  
  render() {
    let navbarStyle = this.state.headerHasTint ? {background:"rgba(116, 118, 128, 1)"}:{background:"transparent"};
        
    return (<nav id="mainNav" className="navbar navbar-default navbar-fixed-top" style={navbarStyle}>
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a className="page-scroll" href="#download">Home</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#features">Our Work</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
  }
}
export default Navigation;