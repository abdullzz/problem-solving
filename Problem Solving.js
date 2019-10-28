/*
PSEUDOCODE

SET count = 0
SET arr as empty array

LOOP from 7 until 31 and store each loop with i
    IF count is 0
        DISPLAY Tanggal i: Tono, Anton, Budi
        INCREMENT count by 1
        CONTINUE to next loop
    IF count mod by 2 equals 0 AND i mod by 5 not equals to 0 
        push 'Tono' to arr
    IF count mod by 4 equals 0 AND i mod by 5 not equals to 0 
        push 'Anton' to arr
    IF count mod by 5 equals 0 AND i mod by 5 not equals to 0 
        push 'Budi' to arr
    IF i mod by 5 equals to 0
        DISPLAY Tanggal i tempat fitness tutup
    END IF
    SET str AND STORE str with the result of arr joined by ', '
    DISPLAY Tanggal i: + value of str
    INCREMENT count by 1
END LOOP
*/

let count = 0

for(let i=7;i<=31;i++){
    let arr = []
    if(count===0){
        console.log('Tanggal '+i+': Tono, Anton, Budi')
        count++
        continue
    }
    if(count%2===0 && i%5!==0) arr.push('Tono')
    if(count%4===0 && i%5!==0) arr.push('Anton')
    if(count%5===0 && i%5!==0) arr.push('Budi')
    if(i%5===0){
        console.log('Tanggal '+i+': Tempat Fitness Tutup')
        count++
        continue
    } 
    let str = arr.join(', ')
    console.log('Tanggal '+i+': '+str)
    count++
}