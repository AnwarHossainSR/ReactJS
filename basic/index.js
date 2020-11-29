import react from 'react';
import ReactDom from 'react-dom';
import './index.css';

let cuDate = new Date(2020,5,5,2);
let greeting = '';
const cssStyle = {};
cuDate = cuDate.getHours();
if(cuDate >= 1 && cuDate < 12)
{
    greeting = "Good Morning";
    cssStyle.color = 'green';
}
else if(cuDate >= 12 && cuDate < 19)
{
    greeting = "Good Evening";
    cssStyle.color = 'cyan';
}
else
{
    greeting = "Good Night";
    cssStyle.color = 'orange';
}

ReactDom.render(
     <h2 className="text">Hellow Sir! <span style={cssStyle}>{greeting}</span></h2>,document.getElementById('root')
);