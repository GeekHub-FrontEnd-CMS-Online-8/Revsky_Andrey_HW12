let
    arr = [1,2,3,4,5,6,7],
    obj ={};

obj = function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
        rv[i] = arr[i];
    return rv;
}

console.log (arr);
console.log (obj);
