import './Technology.css';
import Data from '../data.json';
import { useEffect, useState } from 'react';
import '../assets/technology/background-technology-desktop.jpg';
import '../assets/technology/background-technology-mobile.jpg';
import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import launchVehiclePotrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';
import spaceCapsulePotrairt from '../assets/technology/image-space-capsule-portrait.jpg';
import spacePortLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import spacePortPotrait from '../assets/technology/image-spaceport-portrait.jpg';

const Technology = () => {

    const [techIndex, setTechIndex] = useState(0);
    const [techWidth, setTechWidth] = useState(false);

    const imagesLandscape = [launchVehicleLandscape, spacePortLandscape, spaceCapsuleLandscape];
    const imagesPotrait = [launchVehiclePotrait, spacePortPotrait, spaceCapsulePotrairt];

    useEffect(() => {

        const handleResize = () => {
            if(window.innerWidth <= 1000) setTechWidth(true);
            else setTechWidth(false);
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    },[])

    return (
        <div className="technology">
            <div className="technology-left">
                <p className="technology-sec"> 
                    <span>03</span>
                    SPACE LAUNCH 101
                </p>
                    <div className="technology-left-inner">
                        <div className="technology-nav">
                            <button 
                                className={`technology-btn ${techIndex === 0 ? 'technology-btn-active' : 'none'}`}
                                onClick={() => setTechIndex(0)}>
                            1</button>
                            <button 
                                className={`technology-btn ${techIndex === 1 ? 'technology-btn-active' : 'none'}`}
                                onClick={() => setTechIndex(1)}>
                            2</button>
                            <button 
                                className={`technology-btn ${techIndex === 2 ? 'technology-btn-active' : 'none'}`}
                                onClick={() => setTechIndex(2)}>
                            3</button>
                        </div>
                        <div className="technology-desc">
                            <p className='technology-term'>THE TERMINOLOGY...</p>
                            <p className="technology-name">{Data?.technology[techIndex]?.name}</p>
                            <p className="technology-description">{Data?.technology[techIndex]?.description}</p>
                        </div>
                    </div>
            </div>
            <div className="technology-right">
                <img src={techWidth ? 
                    imagesLandscape[techIndex] :
                    imagesPotrait[techIndex]
                } alt="" />
            </div>
        </div>
    )
}

export default Technology;