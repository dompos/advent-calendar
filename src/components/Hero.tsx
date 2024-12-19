import { useEffect, useState } from "react"

const Hero = () => {
    const [animate, setAnimate] = useState('animate-zoomInDown animate-slower');
    const shake: string = 'animate-shakeX animate-infinite animate-slower';

    function handleClick(): void {
        setAnimate('animate-zoomOutUp animate-duration-[1.5s]');
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