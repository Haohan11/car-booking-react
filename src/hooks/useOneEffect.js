import { useState, useEffect, useRef } from "react";

export default function useOneEffect() {
    const ref = useRef()
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        ref.current?.addEventListener("change", () => {
            setClicked(true)
        }, {once: true})
    }, [])

    return [ref, clicked]
}