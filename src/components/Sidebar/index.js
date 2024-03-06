import './index.scss'
import logoAR from '../../assets/images/ar_logo.jpg'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faAnchor } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => {
    return(
    <div className="nav-bar">
        <Link className="logo" to='/'>
            <img src={ logoAR } alt='logo'/>
        </Link>
        <nav>
            <NavLink exact="true" activeClassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activeClassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/adityaraj2703'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
                <a target='_blank' rel='noreferrer' href='https://github.com/adityaraj-2703'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
                <a target='_blank' rel='noreferrer' href='https://www.scaler.com/academy/profile/5ed1ed594901/'>
                    <FontAwesomeIcon icon={faAnchor} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
        

    </div>
    )
}

export default Sidebar