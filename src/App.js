import logo from './logo.svg';
import './App.css';
import './css/custom.css'
import heart from './img/heart.png';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from './component/Main';
import Questions from './component/Questions';

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <img src={heart} className="App-logo" alt="logo" />
      </header>
      */
     }
        <Routes>
          <Route path="/mbti" element={<Main />} />
          <Route path="/mbti/questions" element={<Questions />} />
        </Routes>
      
    </div>
  );
}

export default App;
