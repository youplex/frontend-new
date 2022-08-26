import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Card = ({ title, videosCount, completed = 10, index = 1, playlistId }) => {
  let timer; // safe from closure
  const cardColors = [
    { bg: "#f3f1ff", completed: "#432fb3" },
    { bg: "#e8f4ff", completed: "#1642a2" },
    { bg: "#fffaec", completed: "#386900" },
    { bg: "#fde0e5", completed: "#a15965" },
  ];
  const progressEndValue = Math.floor((completed / videosCount) * 100);
  const [progressValue, setProgressValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (progressValue === progressEndValue) {
        clearInterval(timer);
        return;
      }
      setProgressValue((prev) => prev + 1);
    }, 40);
    return () => clearInterval(timer);
  }, [progressValue]);

  return (
      <div
        onClick={() => navigate(`/playlist/${playlistId}`)}
        className="card-container cursor-pointer"
        style={{ backgroundColor: cardColors[index].bg }}
      >
        <div
          className="circular-progress"
          style={{
            "--inner": cardColors[index].bg,
            background: `conic-gradient(
            ${cardColors[index].completed} ${progressValue * 3.6}deg,
            ${cardColors[index].completed}4d ${progressValue * 3.6}deg
        )`,
          }}
        >
          <div className="value-container">{progressValue}%</div>
        </div>
        <div className="card-heading mt-10 font-bold ">
          <h1>{title.length > 25 ? `${title.substring(0, 22)}...` : title}</h1>
          <p>Videos: {videosCount}</p>
        </div>
      </div>
  );
};

export default Card;
