/*

MAKE array with value of [7-31]
MAKE string Tono with value of "Tono "
MAKE string Anton with value of "Anton "
MAKE string Budi with value of "Budi"
MAKE string res with valye of ""

LOOP for var i = 0; until i = (31-7)
    IF i%2==0
        THEN  value res added with string value Tono
    IF i%4==0
        THEN value res added with value of Anton
    IF i%5==0
        THEN value res added with value of Budi

    FIND all whitespace and replace with ", "

    IF arr[i]%5==0
        THEN value of res = ''
        res = "toko tutup"
*/

var arr = [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

var tono = "Tono "
var anton = "Anton "
var budi = "Budi"


for (let i = 0; i < arr.length; i++) {
    var res = ""
    if(i%2==0){
        res += tono
    }
    if(i%4==0){
        res += anton
    }
    if(i%5==0){
        res += budi
    }
    
    res = res.replace(/\s+/g, ', ');

    if (arr[i]%5==0){
        res=''
        res = "Toko tutup"
    }
    
    console.log("Tanggal "+arr[i]+" :"+res);
    
}
