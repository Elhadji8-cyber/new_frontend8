"use client"
import {useEffect, useState} from "react";
import { AuthDesktop } from "./AuthDesktop";
import { AuthMobile } from "./AuthMobile";

export const AuthContainer = function(){
    //-------set monile and desktop device
    const [isMobile, setIsMobile] = useState(false);
    //--------the logic useEffect --------
    useEffect(()=> {
        const check = function(){setIsMobile(window.innerWidth < 768)};
        check();
        window.addEventListener("resize", check);
        return function(){
            window.removeEventListener("resize", check);
        }
    }, []);
    return isMobile ? <AuthMobile/> : <AuthDesktop/>;
}
