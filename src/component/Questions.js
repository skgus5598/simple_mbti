import { useState } from 'react';
import '../css/questionBtn.css';
import { questions, options } from '../jsonData/QuestionData';
import LoadingPage from './LoadingPage';
import styled from "styled-components";

const Questions = () => {

    const [result, setResult] = useState([]);
    const [num, setNum] = useState(0);
    const [lastQuestion, setLastQuestion] = useState(false)

    /* Progress Bar */
    const [availableItem, setAvailableItem] = useState(11);
    const maxItem = 12;


    if(num === 12){
        setNum(0);
    }

    return(
        <>
        {
            lastQuestion
                ? (
                    <>
                        <LoadingPage result={result}  />
                    </>
                )
                : <>
                   <div className='Main'>
                    <ProgressBarr>
                        <Progress width = {100-(availableItem*100/maxItem)} />
                    </ProgressBarr>

                    <div style={{width:"50%"}}>
                        <h2>{questions[num].key}.</h2>
                        <h4>{questions[num].value}</h4>
                    </div>
                    <div className="container">
                        <h3 className="articleTitle"></h3>
                        <a className="button btnPush btnLightBlue" onClick={() => {
                            setAvailableItem(availableItem-1)
                            setNum(num+1);
                            let copy = result;
                            copy.push("a");
                            setResult(copy);
                            if(num === 11){
                                setLastQuestion(true);
                            }
                        }}
                        >
                            <span><b> {options[num].a}</b></span>
                        </a><br/>
                        <a className="button btnPush btnOrange" onClick={() => {
                            setAvailableItem(availableItem-1)
                            setNum(num+1);
                            let copy = result;
                            copy.push("b");
                            setResult(copy);
                            if(num === 11){
                                setLastQuestion(true);
                            }
                        }}
                        >
                            <span><b> {options[num].b}</b></span>
                        </a>
                        {/* <a href="" title="Button push orange" className="button btnPush btnLightBlue ">Push</a>
                        <a href="" title="Button push purple" className="button btnPush btnPurple">Push</a> */}
                        <div className="clear"></div>
                    </div>
                    </div>
                    </>

                
        }
       
        </>
    )
}

export default Questions;


const ProgressBarr = styled.div`
    width: 50%;
    height: 30px;
    background-color: #FCBC51;
    border-radius:12px;
    font-weight: 600;
    font-size: .8rem;
    margin-top: 20px;
    overflow: hidden;
    background-image: linear-gradient(
        45deg, rgb(252,163,17) 25%, 
        transparent 25%, transparent 50%, 
        rgb(252,163,17) 50%, rgb(252,163,17) 75%,
        transparent 75%, transparent); 
    
`;

const Progress = styled.div`
    width: ${(props) => props.width}%; 
    height: 30px;
    padding: 0;
    text-align: center;
    background-color: #fbfb8c;
    color: #111;
    transition: 0.4s linear;  
`;
