import { Link } from "react-router-dom";
import './index.scss'
import { useState } from "react";
import backgroundVideo from '../../assets/videos/Java_developer.mp4';
import AnimatedLetters from "../AnimatedLetters";
import ProfilePic from "../../assets/images/f1.JPG"

const Home = () =>{

    const [letterClass] = useState('text-animate')
    const nameArray = [' ', 'A', 'd', 'i', 't', 'y', 'a', ' ', 'R', 'a', 'j']
    const profession = ['S', 'o', 'f','t','w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 4000)
    //   }, [])

    return(
        <div className="container home-page">
            <img
              src={ProfilePic}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <div className="text-zone">
                <h1>
                <span className={`${letterClass} _12`}>Hi,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={profession}
                idx={26}
                />
                
                </h1>
                <h2>Backend Developer | Java | Springboot | DevOps </h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                
            </div>
            <div className="video-zone">
                <video autoPlay muted loop id="myVideo">
                    <source src={backgroundVideo} type="video/mp4"/>
                </video>
            </div>

        </div>
    );
}

export default Home