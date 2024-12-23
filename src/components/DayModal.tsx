import { useState } from "react";
import { Phrase } from "../utils/utils";

interface DayModalProps {
    isOpen: boolean,
    onClose: () => void,
    dayNumber: string
}

const DayModal = ({ isOpen, onClose, dayNumber }: DayModalProps) => {
    if(!isOpen) return null;
    const [animate, setAnimate] = useState<string>('animate-slideInLeft animate-slow')
    const imgSrc: string = `src/assets/photo/${dayNumber}.svg`;

    let phrase: string = Phrase(dayNumber);
    
    return (
        <div onClick={() => {
            setAnimate('animate-slideOutLeft animate-slow');
            setTimeout(onClose, 1100);
            }} 
            className={`h-screen w-screen flex flex-col items-center gap-4 mt-8 ${animate}`}>
            <h1 className="font-candy text-bagPink text-4xl">Day {dayNumber}</h1>
            <p className="font-candy text-bagPink text-center mx-2">{phrase}</p>
            <img className="size-96" src={imgSrc} alt="Placeholder" />
        </div>
    )
}

export default DayModal