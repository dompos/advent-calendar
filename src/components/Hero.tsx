import { useContext, useEffect, useState } from "react"
import { HideContext } from "../pages/HomePage";

const Hero = () => {
    const [animate, setAnimate] = useState<string>('animate-zoomInDown animate-slower');
    const shake: string = 'animate-shakeX animate-infinite animate-slower';
    const setHide = useContext(HideContext);

    function handleClick(): void {
        setAnimate('animate-zoomOutUp animate-duration-[1.5s]');
        setTimeout(() => {
            if(setHide !== undefined) setHide('animate-slideInUp animate-slow');
            setAnimate('hidden');
        }, 1500);
    }

    function animateShake(): void {
        setAnimate(shake)
    }

    useEffect(() => {
        setTimeout(animateShake, 3000);
    }, [])

    return (
        <img onClick={handleClick} className={`${animate} size-96`} src="src/assets/img/heroImage.png" alt="Merry Christmas" />
    )
}

export default Hero