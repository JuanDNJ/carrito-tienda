import { useState } from "react";

export function useToggle() {
    const [toggle, setToggle] = useState()

    return {
        toggle,
        isToggle: !!toggle,
        setToggle
    }
}