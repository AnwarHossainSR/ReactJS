import react from 'react';
import ReactDom from 'react-dom';
import {Add,Sub,Mul} from './calc';

ReactDom.render(
    <>
        <ul>
            <li>Addition : {Add(40,4)}</li>
            <li>Substraction : {Sub(40,4)}</li>
            <li>Multiplication : {Mul(40,4)}</li>
        </ul>
    </>
    ,document.getElementById('root')
);