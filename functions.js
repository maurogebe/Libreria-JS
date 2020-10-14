const fruts = ['mango', 'uva', 'cereza']
const numbers

function myEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}


function myFilter(array, callback) {
    let arr = []
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            arr += array[i]
        }
    }
    return arr
}

function myMap(array, callback) {
    let arr = []
    for(let i = 0; i < array.length; i++) {
        arr += callback(array[i])
    }
    return arr
}

function myFind(array, callback) {

}