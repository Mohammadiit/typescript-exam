interface genericIndexable <T> {
    [index : number] : T;
}

let myArray: genericIndexable <string>;
myArray = ["Bob", "Fred"];


function addGenericType <T> (list: genericIndexable <T> ,value : T) {
    let index = Object.keys (list).length;
   list [index] = value;
}

function removeGenericType <T> (list: genericIndexable <T> , position : number) {
    let size = Object.keys (list).length;
    if ( position >= 0 &&  position < size) {
        delete list [position];
    }
}

function findGenericType <T> (list: genericIndexable <T> , value : T) {
    let size = Object.keys (list).length;
    for (let i = 0; i< size; ++i){
        if ( list [i] == value) {
            console.log( "found");
            return i;
        }
    }
    console.log (" Not found ");
    return -1;
}

addGenericType ( myArray , "titu");

console.log( myArray [2]);

removeGenericType (myArray , 1);

console.log (myArray [1]);

let index = findGenericType (myArray, "Bob");

console.log(index);