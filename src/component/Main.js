import '../App.css';
import '../css/custom.css';
import main1 from '../img/main1.jpg';

import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate = useNavigate();

    return(
        <>
              <div className='Main'>
            <header className="App-header">
                <h1>Personality Test</h1>
                <br/>
                <img src={main1} className="App-logo" alt="logo" />

                <br/>
                <a onClick={()=>{navigate('/mbti/questions')}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    START
                </a>
            </header>
            </div>
        </>
    )
}

export default Main;