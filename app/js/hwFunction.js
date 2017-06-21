// 1
function multiply() {
    let solidData = arguments,
        multiplication = 1;

    for ( let c = 0; c < solidData.length; c++ ) {
        multiplication *= solidData[c];
    }
    
    if (solidData.length == 0) {
            multiplication *= 0;
        }

    console.log(multiplication);
    return multiplication;
}
multiply();



// 3
function reverseString(text) {
    let str = text,
        straight = '';

    for ( let i = str.length - 1; i >= 0; i-- ){
        straight +=  str[i];
    }

    console.log(straight);
    return straight;
}

reverseString('test');



// 4
function getCodeStringFromText(word) {
    let string = word,
        unicodeWord = '';
    
    for ( let a = 0; a < string.length; a++ ) {
        unicodeWord += string.charCodeAt(a) + ' ';
    }

    console.log(unicodeWord);
    return unicodeWord;
}

getCodeStringFromText('hello');



// 6
function dataProcessing(arr, handler) {
    let newValue = 'New value: ';

    for ( let b = 0; b < arr.length; b++ ) {
        newValue += handler(arr[b]);
    }

    console.log(newValue);
    return newValue;
}

function myName(el) {
    el = el[0].toUpperCase() + el.slice(1);
    return el;
}

function multiplyTen(el) {
    el *= 10;
    let newEl = el + ', ';
    return newEl;
}

function userInfo(el) {
    let user = `${el.name} is ${el.age}, `;
    return user;
}

function reverseEl(el) {
    let reverEl = '';

    for ( let i = el.length - 1; i >= 0; i-- ) {
        reverEl += el[i];
    }
    
    return `${reverEl}, `;
}

dataProcessing(['my', 'name', 'is', 'Trinity'], myName);
dataProcessing([10, 20, 30], multiplyTen);
dataProcessing([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], userInfo);
dataProcessing(['abc', '123'], reverseEl);
