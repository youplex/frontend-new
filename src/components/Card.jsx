import { useEffect, useState } from "react";


const  Card = ({ title , videosCount, index = 1 }) => {
    let timer; // safe from closure
    const cardColors = [
        { bg: '#f3f1ff', completed: '#432fb3' },
        { bg: '#e8f4ff', completed: '#1642a2' },
        { bg: '#fffaec', completed: '#386900' },
        { bg: '#fde0e5', completed: '#a15965' }
    ];
    const progressEndValue = (15 * (index + 1)) % 100;
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        clearInterval(timer);
        timer = setInterval(() => {
            if(progressValue === progressEndValue){
                clearInterval(timer);
                return;
            }
            setProgressValue(prev => prev + 1);
        }, 40);
        return () => clearInterval(timer);
    }, [progressValue]);

    return (
    <>
        <div className="card-container" style={{ backgroundColor: cardColors[index].bg }}>
        <div className="circular-progress"
        style={{ 
            '--inner': cardColors[index].bg,
            background: `conic-gradient(
            ${cardColors[index].completed} ${progressValue * 3.6}deg,
            ${cardColors[index].completed}4d ${progressValue * 3.6}deg
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