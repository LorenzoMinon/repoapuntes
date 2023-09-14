process.argv.forEach(function(item,index)){
    if(item === '-n1'){
        a = parseInt(argumentos[index+1])
    }
    else if(item === '-n2'){
        b = parseInt(argumentos[index+1])
    }
}

var argumentos = process.argv

var calc = require('./libs/calc')
var products = require('./data/products.json')
products.list
var a = 5
var b = 10

var sum = function(n1,n2){
    return n1+n2

}

console.log(sum(a,b))

console.log(argumentos)


if( a === undefined || b === undefined) {throw 'Missing n1 or n2'}


switch(operation){
    case div:
        console.log(calc.div(a,b))
        break
    case 'sum':
        default:
            console.log(calc.sum(a,b))

}

console.log(lodash.shuffle(products.list))