import { createContext, useState } from "react"
import Hero from "../components/Hero"
import DayButton from "../components/Daybutton"


export const HideContext = createContext<React.Dispatch<React.SetStateAction<string>> | undefined>(undefined)

const HomePage = () => {
  const [hide, setHide] = useState<string>('hidden');
  const listDayButton = [];

  for (let i = 0; i < 24; i++) {
    const dayNumber: string = i < 9 ? '0' + (i + 1)  : String(i + 1);
    listDayButton.push(<DayButton dayNumber={dayNumber} />);
  }


  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-scroll bg-pink-300">
      <HideContext.Provider value={setHide}>
        <Hero />
      </HideContext.Provider>
      <div className={`${hide} grid grid-cols-2 gap-4 p-2 h-screen`}>
        {listDayButton}
      </div>
    </div>
  )
}

export default HomePage