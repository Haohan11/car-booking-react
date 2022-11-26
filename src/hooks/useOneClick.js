import { useState, useEffect, useRef } from "react";

export default function useOneClick(eventName) {
    const ref = useRef()
    const [clicked, setClicked] = useState(false)

    eventName = typeof eventName === "string" ? eventName : "change"

    useEffect(() => {
        ref.current?.addEventListener(eventName, () => {
            setClicked(true)
        }, {once: true})
    }, [])

    return [ref, clicked]
}