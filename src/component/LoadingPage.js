import { useEffect, useState } from 'react';
import heart from '../img/heart.png';
import ResultPage from './ResultPage';
import { mbtiData } from '../jsonData/ResultData';


const LoadingPage = (props) => {


    const [ready, setReady] = useState(true);
    const [data, setData] = useState(props.result);
    const [rs_result, setRs_result] = useState([]);
    const [obj, setObj] = useState();

    let rs1_a = 0;
    let rs1_b = 0;
    let rs2_a = 0;
    let rs2_b = 0;
    let rs3_a = 0;
    let rs3_b = 0;
    let rs4_a = 0;
    let rs4_b = 0;

    let str = '';

    useEffect(() => {
        setTimeout(() => {
            resultArr();
            setReady(false);
        }, 3000);
    },[]);

    console.log("data : " + data); 
 
    const resultArr = () => {
        data.forEach((e, i ) => {
            if(i <= 2){
                if(e === 'a'){
                    rs1_a ++;
                }else{
                    rs1_b ++;
                }
            }else if(i >= 3 && i <=5){
                if(e === 'a'){
                    rs2_a ++;
                }else{
                    rs2_b ++;
                }
            }else if(i >= 6 && i <=8){
                if(e === 'a'){
                    rs3_a ++;
                }else{
                    rs3_b ++;
                }
            }else{
                if(e === 'a'){
                    rs4_a ++;
                }else{
                    rs4_b ++;
                }
            }
        });


        if(rs1_a > rs1_b){
            let copy = rs_result;
            copy.push("a");
            setRs_result(copy)
        }else{
            let copy = rs_result;
            copy.push("b");
            setRs_result(copy)
        }
        if(rs2_a > rs2_b){
            let copy = rs_result;
            copy.push("a");
            setRs_result(copy)
        }else{
            let copy = rs_result;
            copy.push("b");
            setRs_result(copy)
        }

        if(rs3_a > rs3_b){
            let copy = rs_result;
            copy.push("a");
            setRs_result(copy)
        }else{
            let copy = rs_result;
            copy.push("b");
            setRs_result(copy)
        }

        if(rs4_a > rs4_b){
            let copy = rs_result;
            copy.push("a");
            setRs_result(copy)
        }else{
            let copy = rs_result;
            copy.push("b");
            setRs_result(copy)
        }
        console.log("resultRs : " + rs_result);

        rs_result.forEach((e, i ) => {
            if(i === 0){
                if(e === 'a'){str += 'I'}
                else{str += 'E'}
            }else if(i === 1){
                if(e === 'a'){str += 'N'}
                else{str += 'S'} 
            }else if(i === 2){
                if(e === 'a'){str += 'F'}
                else{ str += 'T'}
            }else{
                if(e === 'a'){str += 'J'}
                else{ str += 'P'}
            }
        });
        let resultObj = mbtiData.filter((e) => { return str === e.name});
        console.log("resultobj :" + JSON.stringify(resultObj));
        setObj(resultObj[0]);
    }

    return(
     <>
           <div className='Main'>
        {
            ready
            ? 
                <div>
                    <img src={heart} className="App-logo" alt="logo" />        
                    <h3>Analyzing . . . . . . .</h3>
                </div>
            : <ResultPage obj={obj} />
        }
        </div>
        </>
    )
}

export default LoadingPage;