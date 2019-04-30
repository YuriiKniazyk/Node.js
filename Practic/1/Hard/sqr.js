function Sqr(a){
    if(typeof a !== 'number'){
        return 'Enter wrong number!!!';
    } 
        return a*a;
}

module.exports = Sqr;