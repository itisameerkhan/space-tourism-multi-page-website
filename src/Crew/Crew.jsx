import './Crew.css';
import '../assets/destination/background-destination-desktop.jpg';
import '../assets/destination/background-destination-mobile.jpg';
import Data from '../data.json';
import { useState } from 'react';

const Crew = () => {

    const [crewIndex, setCrewIndex] = useState(0);

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
                <img src={Data?.crew[crewIndex]?.images?.png} alt="" />
            </div>
        </div>
    )
}

export default Crew;