import { useState } from "react";

export function useToggle() {
    const [toggle, setToggle] = useState(false)

    return {
        toggle,
        setToggle
    }
}