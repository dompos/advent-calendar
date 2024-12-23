import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface DayButtonProp {
    dayNumber: string,
    onClick: (s: string) => void
}

const Daybutton = ({ dayNumber, onClick }: DayButtonProp) => {
    const [box, setBox] = useState<string>('src/assets/icon/surpriseBoxClosed.png');
    const [animate, setAnimate] = useState<string>('animate-shakeX animate-infinite animate-slow');


    return (
        <div onClick={() => {
            onClick(dayNumber);
            setBox('src/assets/icon/surpriseBoxOpen.png');
            setAnimate('');
        }} className="size-48 p-2 ring-4 ring-bagPink rounded-3xl">
            <div className="flex justify-between items-center text-3xl font-candy text-bagPink">
                <h1>{dayNumber}</h1>
                <FaArrowRight />
            </div>
            <div className="flex items-center justify-center">
                <img className={`${animate} size-28`} src={box} alt="Box" />
            </div>
        </div>
    )
}

export default Daybutton