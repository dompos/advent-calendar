import { createContext, useState } from "react"
import Hero from "../components/Hero"
import DayButton from "../components/DayButton"
import DayModal from "../components/DayModal"


export const HideContext = createContext<React.Dispatch<React.SetStateAction<string>> | undefined>(undefined)

const HomePage = () => {
  const [hide, setHide] = useState<string>('hidden');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dayNumber, setDayNumber] = useState<string>('');
  const listDayButton = [];

  function handleOpenModal(s: string): void {
    setDayNumber(s);
    setIsOpen(true);
    setHide('animate-slideOutRight');
    setTimeout(handleDayButtonAnimation, 700);
  }
  function handleCloseModal(): void {
    setIsOpen(false);
    setHide('animate-slideInRight animate-slow');
  }
  function handleDayButtonAnimation(): void {
    setHide('hidden');
  }

  for (let i = 0; i < 24; i++) {
    const dayNumber: string = i < 9 ? '0' + (i + 1) : String(i + 1);
    listDayButton.push(<DayButton onClick={handleOpenModal} dayNumber={dayNumber} />);
  }


  return (
    <div className="h-screen flex flex-col justify-center items-center overflow-scroll bg-pink-300">
      <HideContext.Provider value={setHide}>
        <Hero />
      </HideContext.Provider>
      <div className={`${hide} grid grid-cols-2 gap-4 p-2 h-screen`}>
        {listDayButton}
      </div>
      <DayModal isOpen={isOpen} onClose={handleCloseModal} dayNumber={dayNumber} />
    </div>
  )
}

export default HomePage