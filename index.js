/**
 * TONO 2 HARI SEKALI
 * ANTON 4 HARI SEKALI
 * BUDI 5 HARI SEKALI
 */

/** PSEUDOCODE
 * FOR each number from 7 until 31
 *  set 'day' with "Tanggal" paste number for looping
 *    IF number for looping MOOD 5 amount 0
 *      day plus equals "Fitnes Tutup"
 *    ELSE 
 *      IF number for looping plus 7 MOOD 2 amount 0
 *        day plus equals "Tono"
 *      IF number for looping plus 7 MOOD 4 amount 0
 *        day plus equals "Anton"
 *      IF number for looping plus 7 MOOD 5 amount 0
 *        day plus equals "Budi"
 *      END IF
 *    display 'day'
 * END FOR
 */

/** CODE */
for (let i = 7; i <= 31; i++){
    let day = `Tanggal ${i} : `
    if(i % 5 == 0){
        day += "Fitnes Tutup"
    } else {
        if((i-7) % 2 == 0){
            if(day[day.length - 2] !== ':'){
                    day += `, Tono`
            } else {
                    day += `Tono`
            }
        } if((i-7) % 4 == 0){
            if(day){
                day += `, Anton`
            }
        } if((i-7) % 5 == 0){
            if(day[day.length - 2] !== ':'){
                    day += `, Budi`
            } else {
                    day += `Budi`
            }
        }
    }
    console.log(day)
}