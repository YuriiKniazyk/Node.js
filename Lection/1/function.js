const random = require('./random');

let fnobj1 = {
    arr : [],
    inputX : function(){
        for (let i = 0; i < 10; i++) {
            let x = random(); 
            this.arr.push(x);
        }
        return this.arr;
    },
    sortX : function (){
        this.arr.sort(function (a, b) { 
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        });
        return this.arr;
    },
    printX : function (){
        console.log(this.arr);
    }    
}

module.exports = fnobj1;