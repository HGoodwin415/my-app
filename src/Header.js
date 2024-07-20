import logo from './logo192.png';
import './App.css';

function Header() {
    return(
    <header>
        <nav className="nav">
        <img src={logo} alt="react logo" />
        <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        </nav>
      </header>
    )
}

export default Header;