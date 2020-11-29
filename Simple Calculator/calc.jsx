import react from 'react';

function Add(a,b){
    let add = a+b;
    return add;
}
function Sub(a,b){
    let sub = a-b;
    return sub;
}
function Mul(a,b){
    let mul =  a*b;
    return mul;
}

//export default Add;
export {Add,Sub,Mul};