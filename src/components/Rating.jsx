import { faStar as starEmpty } from "@fortawesome/free-regular-svg-icons";
import { faStar as starFull } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useTransition } from "react";

function Rating() {
  const [isPending, startTransition] = useTransition();
  const [stars, setStars] = useState([
    { filled: false, value: 1 },
    { filled: false, value: 2 },
    { filled: false, value: 3 },
    { filled: false, value: 4 },
    { filled: false, value: 5 },
  ]);

  const handleClick = (value) => {
    let temp = stars;
    temp.forEach((star) => {
      star.filled = star.value <= value;
    });
    setStars(temp);
    startTransition(() => {});
  };

  return (
    <div className="flex gap-2 text-2xl text-red-500">
      {stars.map((star) => (
        <FontAwesomeIcon
          key={star.value}
          onClick={() => handleClick(star.value)}
          icon={star.filled ? starFull : starEmpty}
        />
      ))}
    </div>
  );
}

export default Rating;
