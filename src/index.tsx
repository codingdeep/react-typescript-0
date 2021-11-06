import React from "react";
import ReactDom from 'react-dom'
export default function App():JSX.Element{
    return(
        <div>
            <h1>Hello Mr. Rubel</h1>
        </div>
    )
}

const root = document.getElementById('app-root');
ReactDom.render(<App/>, root)


