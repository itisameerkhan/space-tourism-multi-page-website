import './Destination.css';
import Data from '../data.json';
import { useState } from 'react';
import '../assets/destination/background-destination-desktop.jpg';
import '../assets/destination/background-destination-mobile.jpg';
import moonImage from  '../assets/destination/image-moon.png';
import marsImage from '../assets/destination/image-mars.png';
import europaImage from '../assets/destination/image-europa.png';
import titanImage from '../assets/destination/image-titan.png';


const Destination = () => {

    const [destinationIndex, setDestinationIndex] = useState(0);

    const images = [moonImage, marsImage, europaImage, titanImage];

    return (
        <div className="destination">
            <div className="destination-left">
                <p><span>01</span>PICK YOUR DESTINATION</p>
                <img src={images[destinationIndex]} className='destination-img' />
            </div>
            <div className="destination-right">
                <div className="destination-navigation">
                    <ul>
                        <li
                            className={destinationIndex === 0 ? 'checked-li' : 'none'}
                            onClick={() => setDestinationIndex(0)}
                        >
                            MOON</li>
                        <li
                            className={destinationIndex === 1 ? 'checked-li' : 'none'}
                            onClick={() => setDestinationIndex(1)}
                        >MARS</li>
                        <li
                            className={destinationIndex === 2 ? 'checked-li' : 'none'}
                            onClick={() => setDestinationIndex(2)}
                        >
                            EUROPA</li>
                        <li
                            className={destinationIndex === 3 ? 'checked-li' : 'none'}
                            onClick={() => setDestinationIndex(3)}
                        >TITAN</li>
                    </ul>
                </div>
                <p className='destination-name'>{Data?.destinations[destinationIndex]?.name}</p>
                <p className='destination-description'>{Data?.destinations[destinationIndex]?.description}</p>
                <div className="destination-calculate">
                    <ul>
                        <p className='destination-cal-inner'>AVG. DISTANCE</p>
                        <p className='destination-time'>{Data?.destinations[destinationIndex]?.distance}</p>
                    </ul>
                    <ul>
                        <p className='destination-cal-inner'>EST. TRAVEL TIME</p>
                        <p className='destination-time'>{Data?.destinations[destinationIndex]?.travel}</p>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Destination;