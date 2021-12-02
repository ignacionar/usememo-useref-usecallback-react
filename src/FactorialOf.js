import React, { useMemo } from "react";

const factorial = (n) => {
    return (n <= 1) ? 1 : n * factorial(n-1);
}

const FactorialOf = ({num, increment}) => {

    const fact = useMemo(() => factorial(num), [num]);

    // USEMEMO GUARDA UN VALOR PARA REACT

    return (
        <div>
            <p>The factorial number of <b>{num}</b> is <b>{fact}</b></p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

// OPCION 1
// export default React.memo(FactorialOf, (prevProps, nextProps) => {
//     return prevProps.num === nextProps.num;
// });

// OPCION 2
export default React.memo(FactorialOf);

// REACT.MEMO = RENDERIZA EL ULTIMO RENDERIZADO