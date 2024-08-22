import React, { Component } from 'react';
import { Link } from 'react-scroll';
import '../App.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            menuOpen: false,
            isMobile: false
         };
    }

    componentDidMount() {
        this.checkIsMobile();
        window.addEventListener('resize', this.checkIsMobile);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkIsMobile);
    }

    checkIsMobile = () => {
        this.setState({ isMobile: window.innerWidth <= 768 });
    }

    toggleMenu = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }));
    }

    closeMenu = () => {
        this.setState({ menuOpen: false });
    }

    render() {
        const { isMobile } = this.state;
        const contactOffset = isMobile ? -50 : -125; // Adjust these values as needed

        return (
            <>
                {this.state.menuOpen && <div className="overlay" onClick={this.closeMenu}></div>}
                <nav className='navbar'>
                    <Link to="home" smooth={true} duration={500} offset={-50}>
                        <div className='NavName'>
                        <h1>FIlip</h1>
                        <h2>Tatarnik</h2>
                        </div>
                    </Link>
                    <div className={`navbar-toggler ${this.state.menuOpen ? 'active' : ''}`} onClick={this.toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className={this.state.menuOpen ? 'open' : ''}>
                        <Link to="about" smooth={true} duration={500} offset={-100} onClick={this.closeMenu}>
                            <li>About</li>
                        </Link>
                        <Link to="projects" smooth={true} duration={500} offset={-20} onClick={this.closeMenu}>
                            <li>Projects</li>
                        </Link>
                        <Link to="contact" smooth={true} duration={500} offset={contactOffset} onClick={this.closeMenu}>
                            <li>Contact</li>
                        </Link>
                        <Link to="home" smooth={true} duration={500} offset={-50} onClick={this.closeMenu}>
                            <li>FT</li>
                        </Link>
                    </ul>
                </nav>
            </>
        );
    }
}
 
export default Navbar;