/*
PSEUDOCODE

SET start with value 7
SET end with value 31
SET members with value list of {name: <Member Name>, schedule: <Member schedule>}
SET result with empty string

FOR each number from start to end
  IF number EQUAL TO 7 THEN
    SET result with value 'Tanggal ' CONCAT number CONCAT ': '
    FOR each member of members
      SET result CONCAT member name CONCAT ', '
    ENDFOR
    CALL slice from result with parameter 0 AND length of result MINUS 2
    PRINT result
  ELSE IF number MODULUS 5 EQUAL TO 0 THEN
    SET result with value 'Tanggal ' CONCAT number CONCAT ': Tempat Fitness Tutup'
    PRINT result
  ELSE
    SET counter with value 0
    SET result with value 'Tanggal ' CONCAT number CONCAT ': '
    FOR each member of members
      IF number MINUS 7 MODULUS member schedule EQUAL TO 0 THEN
        SET result CONCAT member name CONCAT ', '
        INCREMENT counter
      ENDIF
    ENDFOR
    IF counter GREATER THAN 0 THEN
      CALL slice from result with parameter 0 AND length of result MINUS 2
      PRINT result
    ELSE
      PRINT result
    ENDIF
  ENDIF
ENDFOR
*/

function fitnessCalendar () {
  let start = 7
  let end = 31
  let members = [
    {name: 'Tono', schedule: 2},
    {name: 'Anton', schedule: 4},
    {name: 'Budi', schedule: 5},
  ]
  let result = ''

  for (; start <= end; start++) {
    if (start === 7) {
      result = `Tanggal ${start}: `
      for (let member of members) {
        result += member.name + ', '
      }
      result = result.slice(0, result.length - 2)
      console.log(result)
    } else if (start % 5 === 0) {
      result = `Tanggal ${start}: Tempat Fitness Tutup`
      console.log(result)
    } else {
      let counter = 0
      result = `Tanggal ${start}: `
      for (let member of members) {
        if ((start - 7) % member.schedule === 0) {
          result += member.name + ', '
          counter++
        }
      }
      if (counter > 0) {
        result = result.slice(0, result.length - 2)
        console.log(result)
      } else {
        console.log(result)
      }
    }
  }
}

fitnessCalendar()
