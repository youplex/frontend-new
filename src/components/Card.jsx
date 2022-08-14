import { useEffect, useState } from "react";

const  Card = ({ title , videosCount }) => {
    let timer;
    const progressEndValue = 15;
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        clearInterval(timer);
        timer = setInterval(() => {
            if(progressValue === progressEndValue){
                clearInterval(timer);
                return;
            }
            setProgressValue(prev => prev + 1);
        }, 50);
        return () => clearInterval(timer);
    }, [progressValue]);

    return (
    <>
        <div className="card-container">
        <div className="circular-progress" 
        style={{ background: `conic-gradient(
            #A15965 ${progressValue * 3.6}deg,
            #edc9cf ${progressValue * 3.6}deg
        )`}}>
            <div className="value-container">{progressValue}%</div>
        </div>
        <div className="card-heading">
            <h1>{title.length > 25 ? `${title.substring(0, 22)}...`: title}</h1>
            <p>Videos: {videosCount}</p>
        </div>
        </div>
      </>
    );
}
  
  export default Card;