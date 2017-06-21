var str = 'I am in the easycode company in the kharkov', capital = '', space = str.indexOf(' ')+1;
for( var i = 0; i<str.length; i++){
    capital += str[i];
    if(i == space){
        capital = capital.slice(0, -1);
        capital += str[space].toUpperCase();
        space = str.indexOf(' ', space)+1;
    }
}
console.log(capital);


var back = 'tseb eht ma i', straight = '';
for ( var i = back.length - 1; i >= 0; i-- ){
    straight +=  back[i];
}
console.log(straight);


var a = 1;
for(var x = 1; x<=10; x++){
    a *= x;
}
console.log(a);


var count = '';
for(var i = 1; i <= 10; i++){
    count += i + ',';
}
console.log(`Считаем до 10ти: ${count.slice(0, -1)}`);


var str = 'JavaScript is a pretty good language', capital = '', space = str.indexOf(' ')+1;
for( var i = 0; i<str.length; i++){
    capital += str[i];
    if(i == space){
        capital = capital.slice(0, -2);
        capital += str[space].toUpperCase();
        space = str.indexOf(' ', space)+1;
    }
}
console.log(capital);


for(var a = 1; a<16; a++){
    if(a % 2 == 1){
        console.log(a);
    }
}

