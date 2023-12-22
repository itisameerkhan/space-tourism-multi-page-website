import './Crew.css';
import Data from '../data.json';
import { useState } from 'react';
import '../assets/destination/background-destination-desktop.jpg';
import '../assets/destination/background-destination-mobile.jpg';
import person1 from '../assets/crew/image-douglas-hurley.png';
import person2 from '../assets/crew/image-mark-shuttleworth.png';
import person3 from '../assets/crew/image-victor-glover.png';
import person4 from  '../assets/crew/image-anousheh-ansari.png';


const Crew = () => {

    const [crewIndex, setCrewIndex] = useState(0);
    const images = [person1, person2, person3, person4];

    return (
        <div className="crew">
            <div className="crew-left">
                <p className='crew-heading'><span>02</span>MEET YOUR CREW</p>
                <p className="crew-role">{Data?.crew[crewIndex]?.role}</p>
                <p className="crew-name">{Data?.crew[crewIndex]?.name}</p>
                <p className="crew-bio">{Data?.crew[crewIndex]?.bio}</p>
                <div className="crew-navigation">
                    <div 
                        className={`crew-nav ${crewIndex === 0 ? 'crew-nav-active' : 'none'}`}
                        onClick={() => setCrewIndex(0)}
                    ></div>
                    <div 
                        className={`crew-nav ${crewIndex === 1 ? 'crew-nav-active' : 'none'}`}
                        onClick={() => setCrewIndex(1)}
                    ></div>
                    <div 
                        className={`crew-nav ${crewIndex === 2 ? 'crew-nav-active' : 'none'}`}
                        onClick={() => setCrewIndex(2)}
                    ></div>
                    <div 
                        className={`crew-nav ${crewIndex === 3 ? 'crew-nav-active' : 'none'}`}
                        onClick={() => setCrewIndex(3)}
                    ></div>
                </div>
            </div>
            <div className="crew-right">
                <img src={images[crewIndex]} alt="" />
            </div>
        </div>
    )
}

export default Crew;