import { createContext, useState } from "react"
import Hero from "../components/Hero"

export const HideContext = createContext<React.Dispatch<React.SetStateAction<string>> | undefined>(undefined)

const HomePage = () => {
  const [hide, setHide] = useState<string>('hidden');


  return (
    <div className="h-screen flex flex-col justify-center items-center bg-pink-300">
      <HideContext.Provider value={setHide}>
        <Hero />
      </HideContext.Provider>
      <div className={`${hide} grid grid-cols-2 gap-2`}>
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
      </div>
    </div>
  )
}

export default HomePage