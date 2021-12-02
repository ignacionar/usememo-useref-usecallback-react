import React from "react";
import { useRef } from "react";

const Focus = () => {
    const myInput = useRef();

    return (
        <div>
            <input ref={myInput}></input>
            <button onClick={() => myInput.current.focus()}>Focus</button>
        </div>
    );
}

export default Focus;