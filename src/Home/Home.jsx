import './Home.css';
import '../assets/home/background-home-desktop.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-inner">
                <div className="home-left">
                    <p className='home-left-desc'>SO, YOU WANT TO TRAVEL TO</p>
                    <p className='home-left-heading'>SPACE</p>
                    <p className='home-left-desc-2'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                <div className="home-right">
                    <div className="button-hover"></div>
                    <Link to='destination'>
                        <button>EXPLORE</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;