import { useEffect } from "react";
import { useState } from "react";

export default function ProgressBar({ timer }){
    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        console.log("Empieza el intervalo");
        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10);
        }, 10);

        return () => {
            console.log("Limpio")
            clearTimeout(interval);
        }
    }, [])

    return <progress max={timer} value={remainingTime} />
}