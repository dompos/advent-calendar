import Hero from "../components/Hero"

const HomePage = () => {


  return (
    <div className="h-screen flex flex-col justify-center items-center bg-pink-300">
      <Hero />
      {/* <div className="grid grid-cols-2 gap-2">
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
        <div className="bg-black size-48"></div>
      </div> */}
    </div>
  )
}

export default HomePage