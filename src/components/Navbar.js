import walletlogo from "./walletlogo.png";
import "./NavbarStyles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (

            <>
                <nav>
                    <a href="index.html">
                        <img src={walletlogo} alt="logo.png" width="49" height="49"></img>
                        <h1 className="Logo">EzMoney</h1>
                    </a>

                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><Link to="/">Dashboard</Link> </li>
                            <li><Link to="/transactions">Transactions</Link> </li>
                            <li><a href="index.html">Support</a> </li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <FontAwesomeIcon
                            icon={this.state.clicked ? (faCircleXmark) : (faBars)}></FontAwesomeIcon>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;