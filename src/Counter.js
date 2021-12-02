import React from "react";
import { useEffect, useState, useRef } from "react";




const Counter = () => {
    
    const [counter, setCounter] = useState(0);

    const stopCounter = () => {
        return clearInterval(id.current);
    }

    let id = useRef();

    const myInput = useRef();

    useEffect(() => {
        id.current = setInterval(() => {
            setCounter(c => c + 1)
        }, 1000);

        return () => {
            stopCounter();
        }

    }, []);

    return (
        <div>
            <div>
                <h3>{counter}</h3>
                <button onClick={stopCounter}>Stop</button>
            </div>
            <br />
            <hr />
            <br />
            
        </div>
    )
}



export default Counter;
