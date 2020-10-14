const fruts = ['mango', 'uva', 'cereza']
const numbers = [20, 10, 18, 30, 14]
const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];

function myEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}


function myFilter(array, callback) {
    let arr = []
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            arr.push(array[i])
        }
    }
    return arr
}

function myMap(array, callback) {
    let arr = []
    for(let i = 0; i < array.length; i++) {
        arr.push(callback(array[i]))
    }
    return arr
}

function myFind(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i]))
        return array[i]
    }
}

function myFindIndex(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i]))
        return [i]
    }
}

function myContains(array, callback) {
    let arr = ''
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            return true
        } else
            arr = false
    } 
    return arr
}

function myPluck(array, callback) {
    let arr = []
    for(let i = 0; i < array.length; i++) {
        arr.push(callback(array[i]))
    }
    return arr
}

function myWithout(array, callback) {
    let arr = []
    for(let i = 0; i < array.length; i++) {
        if(!callback(array[i])) {
            arr.push(array[i])
        }
    }
    return arr
}


function checkAdult(age) {
    return age >= 18;
  }

function name(arreglo) {
    return arreglo.name
}

  console.log(myContains(numbers, checkAdult))


  