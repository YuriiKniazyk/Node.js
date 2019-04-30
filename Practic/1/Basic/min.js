function Min(a,b){
        if(typeof a !== 'number' ||typeof b !== 'number'){
            return 'Enter wrong number!!!';
        } else {
            return a - b;
        }
}

module.exports = Min;