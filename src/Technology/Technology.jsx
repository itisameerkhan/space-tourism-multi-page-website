import './Technology.css';
import '../assets/technology/background-technology-desktop.jpg';
import '../assets/technology/background-technology-mobile.jpg';
import Data from '../data.json';
import { useEffect, useState } from 'react';

const Technology = () => {

    const [techIndex, setTechIndex] = useState(0);
    const [techWidth, setTechWidth] = useState(false);

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
                    Data?.technology[techIndex]?.images?.landscape :
                    Data?.technology[techIndex]?.images?.portrait
                } alt="" />
            </div>
        </div>
    )
}

export default Technology;