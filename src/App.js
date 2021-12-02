import React, { useState, useCallback } from "react";
import { render } from "react-dom";
import FactorialOf from "./FactorialOf";
import Counter from "./Counter.js";
import Focus from "./Focus";

const App = () => {

    const [factorialNum, setFactorialNum] = useState(1);
    const [factorialNum2, setFactorialNum2] = useState(1);

    const incrementNum = useCallback(() => {
        setFactorialNum(n => n + 1);
    }, [factorialNum]);

    const incrementNum2 = useCallback(() => {
        setFactorialNum2(n => n + 1);
    }, [factorialNum2]);

    // USECALLBACK == GUARDAR UNA FUNCION 
    
    return (<center>
        <div>
            <Counter></Counter>
            <Focus />
            <br />
            <hr />
            <FactorialOf num={factorialNum} increment={incrementNum} />
            <br />
            <hr />
            <FactorialOf num={factorialNum2} increment={incrementNum2} />
            <br />
            
        </div>
    </center>);
};

render(React.createElement(App), document.getElementById('root'));