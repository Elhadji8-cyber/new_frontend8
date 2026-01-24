"use client"
import { useState, useEffect } from "react"
type Props = {
    endDate: Date;
    label?: string
}
export const CounterTimer = function({endDate, label}: Props){
    const [timeLeft, setTimeLeft] = useState(
          endDate.getTime() - Date.now()
    );
    useEffect(()=> {
        const interval = setInterval(()=> {
            setTimeLeft(endDate.getTime() - Date.now())
        }, 1000);
        return () => clearInterval(interval)
    }, [endDate]);
    if (timeLeft <= 0){
        return <span className="text-sm text-neutral-400"></span>
    };
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60 )) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60)
    return(
        <section className="text-sm text-red-600 font-semibold">
          {label && <span>{label}</span>}
          {days}j {hours}h {minutes}m {seconds}s
        </section>
    )
}