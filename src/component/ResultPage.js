import { useState } from "react";
import '../css/questionBtn.css';
import { Link } from "react-router-dom";


const ResultPage = (props) => {

    const [obj, setObj] = useState(props.obj);

    return (
        <>
            <div className="resultDiv">
                <h1>{obj.name}</h1>
                <div className="resultImgs">
                    <img className="img1" src={obj.imgUrl} />
                </div>
                <h3>{obj.personality}!</h3>
                <h6>{obj.desc1}</h6>
                <img className="img2" src={obj.imgUrl2} />
                <hr />
                <div className="descriptionDiv">
                {
                    obj.desc2.split(".").map((line, i) => {
                        return (
                            <span className="description" key={i}>
                                {line}.
                                <br />
                            </span>
                        )
                    })
                }
                </div>
                <div className="container" style={{width:"100%"}}>
                    <Link to={'/mbti'}>
                        <a className="button btnPush btnPurple">TRY AGAIN</a>
                    </Link>
                </div>
            </div>

            <br /><br />
        </>
    )
}

export default ResultPage;