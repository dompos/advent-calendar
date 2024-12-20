import { FaArrowRight } from "react-icons/fa";

interface DayButtonProp {
    dayNumber : string
}

const Daybutton = ({dayNumber} : DayButtonProp) => {
    const boxclosed: string = 'src/assets/icon/surpriseBoxClosed.png'; 
  return (
    <div className="size-48 p-2 ring-4 ring-bagPink rounded-3xl">
        <div className="flex justify-between items-center text-3xl font-candy text-bagPink">
            <h1>{dayNumber}</h1>
            <FaArrowRight />
        </div>
        <div className="flex items-center justify-center">
            <img className="animate-shakeX animate-infinite animate-slow size-28" src={boxclosed} alt="Box Closed" />
        </div>
    </div>
  )
}

export default Daybutton