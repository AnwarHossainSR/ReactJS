import react from 'react';
import './index.css';

let cuDate = new Date(2020,5,5,21);
let greeting = '';
const cssStyle = {};
cuDate = cuDate.getHours();


function App(){
    if(cuDate >= 1 && cuDate < 12){
        greeting = "Good Morning";
        cssStyle.color = 'green';
    }
    else if(cuDate >= 12 && cuDate < 19){
        greeting = "Good Evening";
        cssStyle.color = 'cyan';
    }
    else{
        greeting = "Good Night";
        cssStyle.color = 'orange';
    }
    
    return (
        <>     
            <h2 className="text">Hellow Sir! <span style={cssStyle}>{greeting}</span></h2>
        </>
    );
}

export default App;