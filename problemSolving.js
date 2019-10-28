/**
 * PSEUDOCODE
 * 
 * SET count with value of 0
 * 
 * LOOP index from 7 to 31
 *    
 *    SET result as empty array
 * 
 *    IF index equal to 7
 *        DISPLAY "Tanggal of current index: Tono, Anton, Budi"
 *        INCREMENT count by value of 1
 *        continue with next iteration
 *    ELSE IF index modulus 5 equal to 0
 *        DISPLAY "Tanggal index Tempat Fitness Tutup"
 *        INCREMENT count by value of 1
 *        continue with next iteration
 *    END IF
 *    
 *    IF count modulus 2 equal to 0
 *        ADD result array with values of "Tono"
 *    IF count modulus 4 equal to 0
 *        ADD result array with values of "Anton"
 *    IF count modulus 5 equal to 0
 *        ADD result array values with values of "Budi"
 *    END IF
 * 
 *    INCREMENT count by value of 1
 * 
 *    DISPLAY "Tanggal of current index: current result"
 * END LOOP
 *    
 */



let count = 0

for (let index = 7; index <= 31; index++) {
  var result = []

  if(index === 7) {
    console.log(`Tanggal ${index}: Tono, Anton, Budi`)
    count++
    continue
  } else if (index % 5 === 0) {
    console.log(`Tanggal ${index}: Tempat Fitness Tutup`)
    count++
    continue
  }

  if (count % 2 === 0) {
    result.push("Tono")
  }
  if (count % 4 === 0) {
    result.push("Anton")
  }
  if (count % 5 === 0) {
    result.push("Budi")
  }

  count++

  console.log(`Tanggal ${index}: ${result}`)  
}