function Div(a,b){
    if(typeof a !== 'number' ||typeof b !== 'number'){
        return 'Enter wrong number!!!';
    } 
    return a / b;
}

module.exports = Div;