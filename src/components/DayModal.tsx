import { useState } from "react";

interface DayModalProps {
    isOpen: boolean,
    onClose: () => void,
    dayNumber: string
}

const DayModal = ({ isOpen, onClose, dayNumber }: DayModalProps) => {
    if(!isOpen) return null;
    const [animate, setAnimate] = useState<string>('animate-slideInLeft animate-slow')
    const imgSrc: string = `src/assets/photo/${dayNumber}.svg`;
    
    return (
        <div onClick={() => {
            setAnimate('animate-slideOutLeft animate-slow');
            setTimeout(onClose, 1100);
            }} 
            className={`h-screen w-screen flex justify-center ${animate}`}>
            <h1>{dayNumber}</h1>
            <img className="size-96" src={imgSrc} alt="Placeholder" />
        </div>
    )
}

export default DayModal